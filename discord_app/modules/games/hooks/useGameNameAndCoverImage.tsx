// === Module 14878: useGameNameAndCoverImage ===

// Module 14878 (useGameNameAndCoverImage)
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import useGame from "useGame" /* 7466 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGameNameAndCoverImage(arg0, arg1, rounded) {
  const cResult = c.c(15);
  const game = useGame.useGame(arg0);
  ({ data, isLoading } = game);
  if (cResult[0] === data) {
    if (cResult[1] === rounded) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === data) {
      if (cResult[4] === rounded) {
        let tmp7 = cResult[5];
      }
      let name;
      if (data != null) {
        name = data.name;
      }
      if (cResult[6] === name) {
        if (cResult[7] === arg1) {
          let tmp13 = cResult[8];
        }
        if (cResult[9] === isLoading) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp7) {
              if (cResult[12] === tmp13) {
                if (cResult[13] === tmp16) {
                  let tmp17 = cResult[14];
                }
                return tmp17;
              }
            }
          }
        }
        const obj3 = { coverImageUrl: tmp5, iconImageUrl: tmp7, gameName: tmp13, hasGameData: null != data, isLoading };
        cResult[9] = isLoading;
        cResult[10] = tmp5;
        cResult[11] = tmp7;
        cResult[12] = tmp13;
        cResult[13] = null != data;
        cResult[14] = obj3;
        tmp17 = obj3;
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
      cResult[6] = name2;
      cResult[7] = arg1;
      cResult[8] = name1;
      tmp13 = name1;
    }
    let iconURL;
    if (data != null) {
      let num = rounded;
      if (rounded == null) {
        num = 256;
      }
      iconURL = data.getIconURL(num);
    }
    if (iconURL == null) {
      iconURL = null;
    }
    cResult[3] = data;
    cResult[4] = rounded;
    cResult[5] = iconURL;
    tmp7 = iconURL;
  }
  let coverURL;
  if (data != null) {
    coverURL = data.getCoverURL(rounded);
  }
  if (coverURL == null) {
    coverURL = null;
  }
  cResult[0] = data;
  cResult[1] = rounded;
  cResult[2] = coverURL;
  tmp5 = coverURL;
}) : (function useGameNameAndCoverImage(arg0, arg1, rounded) {
  let num = rounded;
  const game = useGame.useGame(arg0);
  const data = game.data;
  let coverURL;
  if (data != null) {
    coverURL = data.getCoverURL(num);
  }
  if (coverURL == null) {
    coverURL = null;
  }
  const obj2 = { coverImageUrl: coverURL, iconImageUrl: null, gameName: null, hasGameData: null, isLoading: null };
  let iconURL;
  if (data != null) {
    if (num == null) {
      num = 256;
    }
    iconURL = data.getIconURL(num);
  }
  if (iconURL == null) {
    iconURL = null;
  }
  obj2.iconImageUrl = iconURL;
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
  obj2.hasGameData = null != data;
  obj2.isLoading = game.isLoading;
  return obj2;
});