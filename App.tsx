// import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.titre}>Bonjour FSA Ouarzazate !</Text>
//       <Text style={styles.sousTitre}>
//         IAIL S5 - Developpement mobile
//       </Text>

//       <Pressable
//         style={styles.bouton}
//         onPress={() => Alert.alert(
//           'Bienvenue', 'Votre premiere application IAIL S5 fonctionne !'
//         )}
//       >
//         <Text style={styles.texteBouton}>Bienvenue</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F2F7FD',
//     padding: 20,
//   },
//   titre: {
//     color: '#003796',
//     fontSize: 26,
//     fontWeight: 'bold',
//   },
//   sousTitre: {
//     marginTop: 12,
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   bouton: {
//     marginTop: 24,
//     backgroundColor: '#C8102E',
//     paddingVertical: 13,
//     paddingHorizontal: 28,
//     borderRadius: 9,
//   },
//   texteBouton: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
import { View, Text, StyleSheet } from 'react-native';

const etudiants = [
  { id: 1, nom: 'Amine', note: 16 },
  { id: 2, nom: 'Youssef', note: 8 },
  { id: 3, nom: 'Salma', note: 14 },
  { id: 4, nom: 'Omar', note: 12 }
];

export default function App() {
  const total = etudiants.reduce((s, e) => s + e.note, 0);
  const moyenne = total / etudiants.length;

  return (
    <View style={styles.ecran}>
      <Text style={styles.titre}>Notes des étudiants</Text>
      <Text style={styles.moyenne}>Moyenne : {moyenne}/20</Text>
      {etudiants.map((e) => (
        <Text key={e.id} style={styles.ligne}>
          {e.nom} : {e.note}/20
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ecran: { flex: 1, justifyContent: 'center', padding: 26, backgroundColor: '#F2F7FD' },
  titre: { fontSize: 24, fontWeight: 'bold', color: '#00235C', marginBottom: 16 },
  moyenne: { fontSize: 19, marginBottom: 20, color: '#003796' },
  ligne: { fontSize: 17, paddingVertical: 8, color: '#00235C' },
});