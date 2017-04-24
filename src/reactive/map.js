module.exports = {
  generateCell: ({award, move, name}) => (
    {
      award,
      move,
      inspect: () => name,
    }
  ),
};
