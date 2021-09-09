export const fetchVillagers = async () => {
  const response = await fetch('https://ac-vill.herokuapp.com/villagers');
  const results = await response.json();

  return results.map((villager) => ({
    id: villager._id,
    name: villager.name,
    japaneseName: villager.japaneseName,
    image: villager.image,
    phrase: villager.phrase,
  }));
};

// export const fetchVillagers = () => {
//   return fetch('https://ac-vill.herokuapp.com/villagers').then((res) =>
//     res.json().then((json) =>
//       json.map((villager) => ({
//         id: villager.id,
//         name: villager.name,
//         japaneseName: villager.japaneseName,
//         image: villager.image,
//         phrase: villager.phrase,
//       }))
//     )
//   );
// };
