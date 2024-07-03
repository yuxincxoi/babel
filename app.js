function a(...args) {
  let result = args[0] + args[1];
  const oneMore = () => {
    return result + 10;
  }
  return oneMore();
}