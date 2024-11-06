{
  const countWordOccurrences = (str1: string, str2: string) => {
    const sentenceArray = str1.split(" ");

    let cnt = 0;

    for (let str of sentenceArray) {
      let s1 = str.toLowerCase();
      let s2 = str2.toLowerCase();
      let lastChar = s1.slice(-1);

      if (s1 === s2) {
        cnt++;
      } else if (lastChar === "." || lastChar === "!" || lastChar === ",") {
        s1 = s1.slice(0, -1);
        if (s1 === s2) cnt++;
      }
    }

    console.log(cnt);
  };

  countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
}
