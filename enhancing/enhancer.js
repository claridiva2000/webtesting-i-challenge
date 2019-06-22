module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement < 20) {
    const newItem = {
      name: item.name,
      durability: 100,
      enhancement: item.enhancement + 1
    };
    return newItem;
  } else {
    return Item;
  }
}

function fail(item) {
  const failItem = {...item}
  if (failItem.enhancement < 15) {
    failItem.durability = item.durability - 5
  } else if (failItem.enhancement < 17) {
      failItem.durability = item.durability - 10
     }
   else {
    failItem.durability = item.durability - 10
    failItem.enhancement = item.enhancement - 1    
  }
    return failItem;
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
