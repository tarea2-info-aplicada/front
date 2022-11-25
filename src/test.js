export const years = () => {
    let list = [];
  for (let index = 2007; index <= 2022; index++) {
    list += { value: index, label: index }
    }
    return list;
};

console.log(years());