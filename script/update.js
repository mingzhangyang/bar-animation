export default function update(obj1, obj2=null, ratio=0) {
  let names = Object.keys(obj1);
  let res = [];
  if (ratio !== 0) {
    for (let name of names) {
      let [v1, v2] = [obj1[name], obj2[name]];
      res.push({
        name: name,
        value: v1 + (v2 - v1) * ratio,
      });
    }
    res.sort((a, b) => {
      if (a.value > b.value) {
        return -1;
      }
      return 1;
    });
    return res;
  }

  res = names.map(name => {
    return {
      name: name,
      value: obj1[name],
    };
  });

  res.sort((a, b) => {
    if (a.value > b.value) {
      return -1;
    }
    return 1;
  });

  return res;
}