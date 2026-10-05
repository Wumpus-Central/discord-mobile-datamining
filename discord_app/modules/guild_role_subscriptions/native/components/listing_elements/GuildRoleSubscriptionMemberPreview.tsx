// discord_app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtilsAll from "../../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import NicknameUtilsDefault from "../../../../../utils/NicknameUtils.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import RoleIconUtils from "../../../../guild_boosting/RoleIconUtils.tsx";
import RoleIconDefault from "../../../../roles/native/RoleIcon.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import UserStore from "../../../../../stores/UserStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = {
  container: obj2,
  avatar: { width: 40, height: 40, borderRadius: 20 },
  content: { marginStart: 16 },
  contextRow: { flexDirection: "row", alignItems: "center" },
};
obj2 = {
  flexDirection: "row",
  padding: 16,
  borderRadius: nativeDefault.radii.xs,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let closure_9 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let content;
      let content2;
      let contextRow;
      let currentUser;
      let guildId;
      let items1;
      let items2;
      let items3;
      let items4;
      let role;
      let style;
      let textStyle;
      let tmp4;
      let tmp7;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(42);
      ({ content, guildId, style, textStyle, role } = arg0);
      if (cResult[0] !== content) {
        let stringResult = content;
        if (undefined === content) {
          const intl = intl2.intl;
          stringResult = intl.string(intl2.t["6OSasb"]);
        }
        cResult[0] = content;
        cResult[1] = stringResult;
        tmp4 = stringResult;
      } else {
        tmp4 = cResult[1];
      }
      const tmp6 = closure_9();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function _() {
          return currentUser.getCurrentUser();
        };
        cResult[2] = items;
        cResult[3] = fn;
        tmp8 = fn;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      const obj4 = NicknameUtilsDefault;
      const name = obj4.useName(guildId, null, stateFromStores);
      if (null == role) {
        return null;
      } else {
        if (cResult[4] === stateFromStores) {
          let tmp12;
          let tmp16;
          if (cResult[5] === guildId) {
            tmp12 = cResult[6];
          }
          if (cResult[7] !== role) {
            const tmpResult2 = RoleIconUtils;
            const roleIconData = tmpResult2.getRoleIconData(role, 16);
            cResult[7] = role;
            cResult[8] = roleIconData;
            tmp16 = roleIconData;
          } else {
            tmp16 = cResult[8];
          }
          const color = role.color;
          if (cResult[9] === style) {
            let tmp18;
            if (cResult[10] === tmp6.container) {
              tmp18 = cResult[11];
            }
            if (cResult[12] === tmp12) {
              let tmp19;
              let tmp22;
              let tmp25;
              if (cResult[13] === tmp6.avatar) {
                tmp19 = cResult[14];
              }
              ({ content: content2, contextRow } = tmp6);
              if (cResult[15] !== color) {
                const obj8 = utils_ColorUtilsAll;
                const int2hexResult = obj8.int2hex(color);
                cResult[15] = color;
                cResult[16] = int2hexResult;
                tmp22 = int2hexResult;
              } else {
                tmp22 = cResult[16];
              }
              if (cResult[17] !== tmp22) {
                const obj2 = { color: tmp22 };
                cResult[17] = tmp22;
                cResult[18] = obj2;
                tmp25 = obj2;
              } else {
                tmp25 = cResult[18];
              }
              if (cResult[19] === name) {
                let tmp26;
                if (cResult[20] === tmp25) {
                  tmp26 = cResult[21];
                }
                if (cResult[22] === role.name) {
                  let tmp29;
                  let tmp35;
                  let tmp34;
                  if (cResult[23] === tmp16) {
                    tmp29 = cResult[24];
                  }
                  const _Symbol = Symbol;
                  if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp37 = metroRequire(native.Spacer, { size: 8 });
                    const tmp38 = metroRequire(Text_Text.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: "4:20 PM",
                    });
                    cResult[25] = tmp37;
                    cResult[26] = tmp38;
                    tmp35 = tmp38;
                    tmp34 = tmp37;
                  } else {
                    tmp34 = cResult[25];
                    tmp35 = cResult[26];
                  }
                  if (cResult[27] === tmp6.contextRow) {
                    if (cResult[28] === tmp26) {
                      let tmp39;
                      if (cResult[29] === tmp29) {
                        tmp39 = cResult[30];
                      }
                      if (cResult[31] === tmp4) {
                        let tmp43;
                        if (cResult[32] === textStyle) {
                          tmp43 = cResult[33];
                        }
                        if (cResult[34] === tmp6.content) {
                          if (cResult[35] === tmp39) {
                            let tmp46;
                            if (cResult[36] === tmp43) {
                              tmp46 = cResult[37];
                            }
                            if (cResult[38] === tmp46) {
                              if (cResult[39] === tmp18) {
                                let tmp50;
                                if (cResult[40] === tmp19) {
                                  tmp50 = cResult[41];
                                }
                                return tmp50;
                              }
                            }
                            const obj3 = { style: tmp18, children: items1 };
                            items1 = [tmp19, tmp46];
                            const tmp53 = metroImportAll(View, obj3);
                            cResult[38] = tmp46;
                            cResult[39] = tmp18;
                            cResult[40] = tmp19;
                            cResult[41] = tmp53;
                            tmp50 = tmp53;
                          }
                        }
                        const obj5 = { style: content2, children: items2 };
                        items2 = [tmp39, tmp43];
                        const tmp49 = metroImportAll(View, obj5);
                        cResult[34] = tmp6.content;
                        cResult[35] = tmp39;
                        cResult[36] = tmp43;
                        cResult[37] = tmp49;
                        tmp46 = tmp49;
                      }
                      const obj6 = {
                        variant: "text-md/normal",
                        color: "text-default",
                        style: textStyle,
                        children: tmp4,
                      };
                      const tmp45 = metroRequire(Text_Text.Text, obj6);
                      cResult[31] = tmp4;
                      cResult[32] = textStyle;
                      cResult[33] = tmp45;
                      tmp43 = tmp45;
                    }
                  }
                  const obj7 = { style: contextRow, children: items3 };
                  items3 = [tmp26, tmp29, tmp34, tmp35];
                  const tmp42 = metroImportAll(View, obj7);
                  cResult[27] = tmp6.contextRow;
                  cResult[28] = tmp26;
                  cResult[29] = tmp29;
                  cResult[30] = tmp42;
                  tmp39 = tmp42;
                }
                let tmp30 = null;
                if (null != tmp16) {
                  const obj9 = { children: items4 };
                  items4 = [metroRequire(native.Spacer, { size: 4 })];
                  const obj10 = { name: role.name, src: null, unicodeEmoji: null, size: 16 };
                  ({ customIconSrc: obj12.src, unicodeEmoji: obj12.unicodeEmoji } = tmp16);
                  items4[1] = metroRequire(RoleIconDefault, obj10);
                  tmp30 = metroImportAll(metroImportDefault, obj9);
                }
                cResult[22] = role.name;
                cResult[23] = tmp16;
                cResult[24] = tmp30;
                tmp29 = tmp30;
              }
              const obj11 = {
                variant: "text-md/semibold",
                color: "interactive-text-active",
                style: tmp25,
                children: name,
              };
              const tmp28 = metroRequire(Text_Text.Text, obj11);
              cResult[19] = name;
              cResult[20] = tmp25;
              cResult[21] = tmp28;
              tmp26 = tmp28;
            }
            const obj13 = { style: tmp6.avatar, source: tmp12 };
            const tmp21 = metroRequire(FastImageDefault, obj13);
            cResult[12] = tmp12;
            cResult[13] = tmp6.avatar;
            cResult[14] = tmp21;
            tmp19 = tmp21;
          }
          const items5 = [tmp6.container, style];
          cResult[9] = style;
          cResult[10] = tmp6.container;
          cResult[11] = items5;
          tmp18 = items5;
        }
        let avatarURL;
        const makeSource = AvatarUtilsDefault.makeSource;
        AvatarUtilsDefault;
        if (stateFromStores != null) {
          avatarURL = stateFromStores.getAvatarURL(guildId, 40);
        }
        if (avatarURL == null) {
          const tmp10Result2 = AvatarUtilsDefault;
          avatarURL = tmp10Result2.getDefaultAvatarURL(undefined, undefined);
        }
        const source = makeSource(avatarURL);
        cResult[4] = stateFromStores;
        cResult[5] = guildId;
        cResult[6] = source;
        tmp12 = source;
      }
    }
  : (content) => {
      let currentUser;
      let guildId;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let obj11;
      let obj7;
      let role;
      let style;
      let textStyle;
      content = content.content;
      if (content === undefined) {
        const intl = intl2.intl;
        content = intl.string(intl2.t["6OSasb"]);
      }
      ({ guildId, role } = content);
      ({ style, textStyle } = content);
      const tmp3 = closure_9();
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      NicknameUtilsDefault;
      if (null == role) {
        return null;
      } else {
        let avatarURL;
        const makeSource = AvatarUtilsDefault.makeSource;
        AvatarUtilsDefault;
        if (stateFromStores != null) {
          avatarURL = stateFromStores.getAvatarURL(guildId, 40);
        }
        if (avatarURL == null) {
          const tmp6Result2 = AvatarUtilsDefault;
          avatarURL = tmp6Result2.getDefaultAvatarURL(undefined, undefined);
        }
        const source = makeSource(avatarURL);
        const tmp4Result = RoleIconUtils;
        const roleIconData = tmp4Result.getRoleIconData(role, 16);
        const obj2 = { style: items1, children: items2 };
        items1 = [tmp3.container, style];
        const color = role.color;
        const obj3 = { style: tmp3.avatar, source };
        items2 = [metroRequire(FastImageDefault, obj3)];
        const obj4 = { style: tmp3.content, children: items5 };
        const obj5 = { style: tmp3.contextRow, children: items3 };
        const obj6 = { variant: "text-md/semibold", color: "interactive-text-active", style: obj7, children: tmp8 };
        obj7 = { color: obj11.int2hex(color) };
        const Text = Text_Text.Text;
        obj11 = utils_ColorUtilsAll;
        items3 = [metroRequire(Text, obj6), , ,];
        let tmp12Result = null;
        if (null != roleIconData) {
          const obj8 = { children: items4 };
          items4 = [metroRequire(native.Spacer, { size: 4 })];
          const obj9 = { name: role.name, src: null, unicodeEmoji: null, size: 16 };
          ({ customIconSrc: obj13.src, unicodeEmoji: obj13.unicodeEmoji } = roleIconData);
          items4[1] = metroRequire(RoleIconDefault, obj9);
          tmp12Result = metroImportAll(metroImportDefault, obj8);
        }
        items3[1] = tmp12Result;
        items3[2] = metroRequire(native.Spacer, { size: 8 });
        items3[3] = metroRequire(Text_Text.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: "4:20 PM",
        });
        items5 = [metroImportAll(View, obj5)];
        const obj10 = { variant: "text-md/normal", color: "text-default", style: textStyle, children: content };
        items5[1] = metroRequire(Text_Text.Text, obj10);
        items2[1] = metroImportAll(View, obj4);
        return metroImportAll(View, obj2);
      }
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx",
);

export const GuildRoleSubscriptionMemberPreview = tmp4;
