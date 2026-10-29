// discord_app/modules/user_profile/native/GameCoverImage.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GameCoverArt from "../../game_profile/native/components/GameCoverArt.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5005);
let obj = { cover: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj.cover = {
  aspectRatio: 0.75,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
let closure_4 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = {
  aspectRatio: 0.75,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/GameCoverImage.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GameCoverImage(arg0) {
        const cResult = c.c(12);
        ({ coverImageUrl, iconImageUrl, gameName, width } = arg0);
        ({ hasGameData, isLoading } = arg0);
        const tmp4 = closure_4();
        if (cResult[0] !== width) {
          const obj2 = { width };
          cResult[0] = width;
          cResult[1] = obj2;
          let tmp5 = obj2;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === tmp4.cover) {
          if (cResult[3] === tmp5) {
            let tmp6 = cResult[4];
          }
          if (!isLoading) {
            if (hasGameData) {
              if (cResult[7] === coverImageUrl) {
                if (cResult[8] === gameName) {
                  if (cResult[9] === iconImageUrl) {
                    if (cResult[10] === tmp6) {
                      let tmp7 = cResult[11];
                    }
                    return tmp7;
                  }
                }
              }
              const obj3 = {
                coverUrl: coverImageUrl,
                iconUrl: iconImageUrl,
                gameName,
                size: GameCoverArt.GameCoverArtSize.COMPACT,
                style: tmp6,
                accessible: false,
              };
              const tmp9 = jsx(GameCoverArt.GameCoverArtFromURLs, {
                coverUrl: coverImageUrl,
                iconUrl: iconImageUrl,
                gameName,
                size: GameCoverArt.GameCoverArtSize.COMPACT,
                style: tmp6,
                accessible: false,
              });
              cResult[7] = coverImageUrl;
              cResult[8] = gameName;
              cResult[9] = iconImageUrl;
              cResult[10] = tmp6;
              cResult[11] = tmp9;
              tmp7 = tmp9;
            }
          }
          if (cResult[5] !== tmp6) {
            const obj4 = { style: tmp6 };
            const tmp13 = <View style={tmp6} />;
            cResult[5] = tmp6;
            cResult[6] = tmp13;
          }
        }
        const items = [tmp4.cover, tmp5];
        cResult[2] = tmp4.cover;
        cResult[3] = tmp5;
        cResult[4] = items;
        tmp6 = items;
      }
    : function GameCoverImage(arg0) {
        ({ coverImageUrl, iconImageUrl, gameName, hasGameData, isLoading, width } = arg0);
        const items = [closure_4().cover, { width }];
        if (!isLoading) {
          if (hasGameData) {
            const obj = {
              coverUrl: coverImageUrl,
              iconUrl: iconImageUrl,
              gameName,
              size: GameCoverArt.GameCoverArtSize.COMPACT,
              style: items,
              accessible: false,
            };
            let tmp4 = jsx(GameCoverArt.GameCoverArtFromURLs, {
              coverUrl: coverImageUrl,
              iconUrl: iconImageUrl,
              gameName,
              size: GameCoverArt.GameCoverArtSize.COMPACT,
              style: items,
              accessible: false,
            });
          }
          return tmp4;
        }
        tmp4 = <View style={items} />;
      },
);
