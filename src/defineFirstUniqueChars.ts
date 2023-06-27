const defineFirstUniqueChars = (allCountedWordChars: Record<string, number>) => {
  for (let [key, value] of Object.entries(allCountedWordChars)) {
    if (value > 1) {
      delete allCountedWordChars[key];
    }
  }
};

export default defineFirstUniqueChars;
