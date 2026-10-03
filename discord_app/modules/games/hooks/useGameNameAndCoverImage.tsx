// === Module 8584: useGameNameAndCoverImage ===

// Module 8584 (useGameNameAndCoverImage)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useGame from "useGame" /* 6812 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, c9) => {
  const cResult = c.c(10);
  const game = useGame.useGame(arg0);
  ({ data, isLoading } = game);
  if (cResult[0] === data) {
    if (cResult[1] === c9) {
      let tmp5 = cResult[2];
    }
    let name;
    if (data != null) {
      name = data.name;
    }
    if (cResult[3] === name) {
      if (cResult[4] === arg1) {
        let tmp10 = cResult[5];
      }
      if (cResult[6] === isLoading) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp10) {
            let tmp13 = cResult[9];
          }
          return tmp13;
        }
      }
      const obj3 = { coverImageUrl: tmp5, gameName: tmp10, isLoading };
      cResult[6] = isLoading;
      cResult[7] = tmp5;
      cResult[8] = tmp10;
      cResult[9] = obj3;
      tmp13 = obj3;
    }
    let name1;
    if (data != null) {
      name1 = data.name;
    }
    if (name1 == null) {
      name1 = arg1;
    }
    if (name1 == null) {
      const intl = util.intl;
      name1 = intl.string(util.t.GIWFlF);
    }
    let name2;
    if (data != null) {
      name2 = data.name;
    }
    cResult[3] = name2;
    cResult[4] = arg1;
    cResult[5] = name1;
    tmp10 = name1;
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
  const game = useGame.useGame(arg0);
  const data = game.data;
  let coverURL;
  if (data != null) {
    coverURL = data.getCoverURL(c9);
  }
  const obj2 = { coverImageUrl: coverURL, gameName: null, isLoading: null };
  let name;
  if (data != null) {
    name = data.name;
  }
  if (name == null) {
    name = arg1;
  }
  if (name == null) {
    const intl = util.intl;
    name = intl.string(util.t.GIWFlF);
  }
  obj2.gameName = name;
  obj2.isLoading = game.isLoading;
  return obj2;
});