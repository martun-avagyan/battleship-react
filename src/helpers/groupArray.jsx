export default function groupArray() {
  const board = Array.from(Array(100).keys());
  const grouping = board.reduce((acc, item, index) => {
    let currentIndex = index % 10;
    (acc[currentIndex] = acc[currentIndex] || []).push(item);
    return acc;
  }, []);
  return grouping;
}
