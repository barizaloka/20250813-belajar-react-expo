import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi Ini</Text>
      <Text style={styles.bodyText}>
        Aplikasi ini dibuat sebagai contoh untuk project React Native.
        Kami berupaya menyajikan antarmuka pengguna yang modern dan fungsional.
      </Text>
      <Text style={styles.bodyText}>
        Versi Aplikasi: 1.0.0
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Warna latar belakang yang lebih gelap
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Menambahkan padding agar teks tidak terlalu mepet ke tepi
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E0E0E0', // Warna teks yang lebih terang
    marginBottom: 20, // Memberi jarak antara judul dan teks
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 16,
    color: '#B0B0B0', // Warna teks yang sedikit lebih gelap dari judul
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 24, // Menambahkan spasi antar baris
  },
});