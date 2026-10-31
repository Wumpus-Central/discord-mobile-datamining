// discord_app/modules/user_profile/native/GameCoverImage.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GameCoverArt from "../../game_profile/native/components/GameCoverArt.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj = { cover: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj.cover = {
  aspectRatio: 0.75,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
let closure_4 = createStyles.createStyles(obj);
const obj3 = {
  aspectRatio: 0.75,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/GameCoverImage.tsx");

export default noop.memo(function GameCoverImage(arg0) {
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
});
