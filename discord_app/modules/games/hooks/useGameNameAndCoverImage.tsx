// === Module 8584: useGameNameAndCoverImage ===

// Module 8584 (useGameNameAndCoverImage)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import useGame from "useGame" /* 6812 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, c9) => {
  let data;
  let isLoading;
  const obj = react;
  const cResult = obj.c(10);
  const obj2 = useGame;
  const game = obj2.useGame(arg0);
  ({ data, isLoading } = game);
  if (cResult[0] === data) {
    let tmp5;
    if (cResult[1] === c9) {
      tmp5 = cResult[2];
    }
    let name;
    const tmp7 = cResult[3];
    if (data != null) {
      name = data.name;
    }
    if (tmp7 === name) {
      let tmp11;
      if (cResult[4] === arg1) {
        tmp11 = cResult[5];
      }
      if (cResult[6] === isLoading) {
        if (cResult[7] === tmp5) {
          let tmp14;
          if (cResult[8] === tmp11) {
            tmp14 = cResult[9];
          }
          return tmp14;
        }
      }
      const obj3 = { coverImageUrl: tmp5, gameName: tmp11, isLoading };
      cResult[6] = isLoading;
      cResult[7] = tmp5;
      cResult[8] = tmp11;
      cResult[9] = obj3;
      tmp14 = obj3;
    }
    let name1;
    if (data != null) {
      name1 = data.name;
    }
    if (name1 == null) {
      name1 = arg1;
    }
    if (name1 == null) {
      const intl = intl2.intl;
      name1 = intl.string(intl2.t.GIWFlF);
    }
    let name2;
    if (data != null) {
      name2 = data.name;
    }
    cResult[3] = name2;
    cResult[4] = arg1;
    cResult[5] = name1;
    tmp11 = name1;
  }
  let coverURL;
  if (data != null) {
    coverURL = data.getCoverURL(c9);
  }
  cResult[0] = data;
  cResult[1] = c9;
  cResult[2] = coverURL;
  tmp5 = coverURL;
}) : ((arg0, arg1, c9) => {
  let name;
  const obj = useGame;
  const game = obj.useGame(arg0);
  const data = game.data;
  let coverURL;
  const isLoading = game.isLoading;
  if (data != null) {
    coverURL = data.getCoverURL(c9);
  }
  const obj2 = { coverImageUrl: coverURL, gameName: name, isLoading };
  name = undefined;
  if (data != null) {
    name = data.name;
  }
  if (name == null) {
    name = arg1;
  }
  if (name == null) {
    const intl = intl2.intl;
    name = intl.string(intl2.t.GIWFlF);
  }
  return obj2;
});
const result = size.fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

export default tmp2;