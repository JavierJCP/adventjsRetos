const gifts = ['cat', 'game', 'socks'];

function wrapping(gifts) {
  return gifts.map((gift) => {
    const paper = '*'.repeat(gift.length + 2);
    return paper + '\n' + '*' + gift + '*' + '\n' + paper;
  });
}

console.log(wrapping(gifts));
