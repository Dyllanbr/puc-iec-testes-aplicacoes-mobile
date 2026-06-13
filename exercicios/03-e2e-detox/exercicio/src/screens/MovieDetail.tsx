// src/screens/MovieDetail.tsx — versão E2E (exercício 03)
// testIDs adicionados para Detox: detail-screen, detail-title, detail-rating

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useMovieById } from '@/queries/movies/get-movie-by-id';
import { posterUrl } from '@/utils/poster-url';
import { isTokenError } from '@/services/api';
import TokenMissingScreen from '@/components/TokenMissingScreen';
import type { RootStackParamList } from '@/routes/RootStack';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function MovieDetail({ route, navigation }: Props) {
  const { id } = route.params;
  const { data, isLoading, error } = useMovieById(id);

  if (isTokenError(error)) return <TokenMissingScreen />;
  if (isLoading) return <ActivityIndicator testID="detail-loading" style={styles.center} />;
  if (error || !data) return <Text testID="detail-error" style={styles.center}>Erro ao carregar</Text>;

  const poster = posterUrl(data.poster_path, 'w500');

  return (
    <ScrollView testID="detail-screen" contentContainerStyle={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>← Voltar</Text>
      </Pressable>

      {poster && <Image source={{ uri: poster }} style={styles.poster} />}

      <View style={styles.headerRow}>
        <Text testID="detail-title" style={styles.title}>
          {data.title}
        </Text>
      </View>

      <Text testID="detail-rating" style={styles.meta}>
        ⭐ {data.vote_average.toFixed(1)} · {data.release_date}
      </Text>
      <Text style={styles.overview}>{data.overview}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
  },
  backText: { fontSize: 15, color: '#0066cc', fontWeight: '500' },
  poster: { width: 200, height: 300, alignSelf: 'center', borderRadius: 8 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', flex: 1 },
  meta: { color: '#666' },
  overview: { fontSize: 14, lineHeight: 20 },
});
