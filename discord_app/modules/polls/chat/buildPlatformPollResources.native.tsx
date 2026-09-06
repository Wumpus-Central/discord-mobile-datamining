// discord_app/modules/polls/chat/buildPlatformPollResources.native.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_AvatarUtils from "../../../utils/native/AvatarUtils.tsx";
import _modDef5618 from "../../../../_runtime/metro/05618__.js";
import _modDef7144 from "../../../../_runtime/metro/07144__.js";
import renderer_EmbedUtils from "../../messages/native/renderer/EmbedUtils.tsx";
import apply from "../../../../_runtime/metro/00012__.js";

require = fn;
let closure_3 = apply.mapValues(fn(11719).pollStyleSets, (arg0) => {
  _require = arg0;
  closure_1 = require("createStyles").createNativeStyleProperties((arg0) => {
    let tmp = closure_0(nativeDefault, arg0);
    return apply.pickBy(tmp, (num) => {
      let tmp = typeof num !== "number";
      if (typeof num !== "number") {
        tmp = typeof num !== "boolean";
      }
      return tmp;
    });
  });
  return (arg0, arg1) => {
    let tmp = closure_0(nativeDefault, arg1);
    const obj = {};
    const merged = Object.assign(closure_1(arg0, arg1));
    const merged1 = Object.assign(
      obj.pickBy(closure_0(nativeDefault, arg1), (num) => {
        let tmp = typeof num === "number";
        if (typeof num !== "number") {
          tmp = typeof num === "boolean";
        }
        return tmp;
      }),
    );
    return obj;
  };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/chat/buildPlatformPollResources.native.tsx");

export const buildPlatformPollResources = function buildPlatformPollResources(theme, layoutType) {
  closure_0 = theme;
  closure_1 = layoutType;
  const obj = {
    styles: apply.mapValues(closure_3, (fn) => fn(closure_0, closure_1)),
    selectedIcon: null,
    checkmarkIcon: null,
  };
  obj.selectedIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7144);
  obj.checkmarkIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef5618);
  return obj;
};
export const getAvatarUrl = function getAvatarUrl(currentUser, guildId) {
  return utils_AvatarUtils.ensureAvatarSource(currentUser.getAvatarSource(guildId, false)).uri;
};
