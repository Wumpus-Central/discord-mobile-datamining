// === Module 15052: GuildRoleSubscriptionMemberPreview ===

// Module 15052 (GuildRoleSubscriptionMemberPreview)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtilsAll from "utils/ColorUtils" /* 1103 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import Text_Text from "Text/Text" /* 4886 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5042 */;
import FastImageDefault from "FastImage" /* 5974 */;
import RoleIconUtils from "RoleIconUtils" /* 6686 */;
import RoleIconDefault from "RoleIcon" /* 6704 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flexDirection: "row", padding: 16, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, avatar: { width: 40, height: 40, borderRadius: 20 }, content: { marginStart: 16 }, contextRow: { flexDirection: "row", alignItems: "center" } };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", padding: 16, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx");

export const GuildRoleSubscriptionMemberPreview = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(42);
  ({ content, guildId, style, textStyle, role } = arg0);
  if (cResult[0] !== content) {
    let stringResult = content;
    if (undefined === content) {
      const intl = util.intl;
      stringResult = intl.string(util.t["6OSasb"]);
    }
    cResult[0] = content;
    cResult[1] = stringResult;
    let tmp4 = stringResult;
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
    let tmp8 = fn;
    let tmp7 = items;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
  const tmpResult = initialize;
  const name = NicknameUtilsDefault.useName(guildId, null, stateFromStores);
  if (null == role) {
    return null;
  } else {
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === guildId) {
        let tmp12 = cResult[6];
      }
      if (cResult[7] !== role) {
        const roleIconData = RoleIconUtils.getRoleIconData(role, 16);
        cResult[7] = role;
        cResult[8] = roleIconData;
        let tmp15 = roleIconData;
        const tmpResult2 = RoleIconUtils;
      } else {
        tmp15 = cResult[8];
      }
      const color = role.color;
      if (cResult[9] === style) {
        if (cResult[10] === tmp6.container) {
          let tmp17 = cResult[11];
        }
        if (cResult[12] === tmp12) {
          if (cResult[13] === tmp6.avatar) {
            let tmp18 = cResult[14];
          }
          ({ content: content2, contextRow } = tmp6);
          if (cResult[15] !== color) {
            const int2hexResult = utils_ColorUtilsAll.int2hex(color);
            cResult[15] = color;
            cResult[16] = int2hexResult;
            let tmp21 = int2hexResult;
          } else {
            tmp21 = cResult[16];
          }
          if (cResult[17] !== tmp21) {
            const obj2 = { color: tmp21 };
            cResult[17] = tmp21;
            cResult[18] = obj2;
            let tmp24 = obj2;
          } else {
            tmp24 = cResult[18];
          }
          if (cResult[19] === name) {
            if (cResult[20] === tmp24) {
              let tmp25 = cResult[21];
            }
            if (cResult[22] === role.name) {
              if (cResult[23] === tmp15) {
                let tmp28 = cResult[24];
              }
              const _Symbol = Symbol;
              if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp36 = timestampProducer(native.Spacer, { size: 8 });
                const tmp37 = timestampProducer(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: "4:20 PM" });
                cResult[25] = tmp36;
                cResult[26] = tmp37;
                let tmp34 = tmp37;
                let tmp33 = tmp36;
              } else {
                tmp33 = cResult[25];
                tmp34 = cResult[26];
              }
              if (cResult[27] === tmp6.contextRow) {
                if (cResult[28] === tmp25) {
                  if (cResult[29] === tmp28) {
                    let tmp38 = cResult[30];
                  }
                  if (cResult[31] === tmp4) {
                    if (cResult[32] === textStyle) {
                      let tmp42 = cResult[33];
                    }
                    if (cResult[34] === tmp6.content) {
                      if (cResult[35] === tmp38) {
                        if (cResult[36] === tmp42) {
                          let tmp45 = cResult[37];
                        }
                        if (cResult[38] === tmp45) {
                          if (cResult[39] === tmp17) {
                            if (cResult[40] === tmp18) {
                              let tmp49 = cResult[41];
                            }
                            return tmp49;
                          }
                        }
                        const obj3 = { style: tmp17, children: null };
                        const items1 = [tmp18, tmp45];
                        obj3.children = items1;
                        const tmp52 = closure_1_8(View, obj3);
                        cResult[38] = tmp45;
                        cResult[39] = tmp17;
                        cResult[40] = tmp18;
                        cResult[41] = tmp52;
                        tmp49 = tmp52;
                      }
                    }
                    const obj5 = { style: content2, children: null };
                    const items2 = [tmp38, tmp42];
                    obj5.children = items2;
                    const tmp48 = closure_1_8(View, obj5);
                    cResult[34] = tmp6.content;
                    cResult[35] = tmp38;
                    cResult[36] = tmp42;
                    cResult[37] = tmp48;
                    tmp45 = tmp48;
                  }
                  const obj6 = { variant: "text-md/normal", color: "text-default", style: textStyle, children: tmp4 };
                  const tmp44 = timestampProducer(Text_Text.Text, obj6);
                  cResult[31] = tmp4;
                  cResult[32] = textStyle;
                  cResult[33] = tmp44;
                  tmp42 = tmp44;
                }
              }
              const obj7 = { style: contextRow, children: null };
              const items3 = [tmp25, tmp28, tmp33, tmp34];
              obj7.children = items3;
              const tmp41 = closure_1_8(View, obj7);
              cResult[27] = tmp6.contextRow;
              cResult[28] = tmp25;
              cResult[29] = tmp28;
              cResult[30] = tmp41;
              tmp38 = tmp41;
            }
            let tmp29 = null;
            if (null != tmp15) {
              const obj8 = { children: null };
              const items4 = [timestampProducer(native.Spacer, { size: 4 }), ];
              const obj10 = { name: role.name, src: null, unicodeEmoji: null, size: 16 };
              ({ customIconSrc: obj13.src, unicodeEmoji: obj13.unicodeEmoji } = tmp15);
              items4[1] = timestampProducer(RoleIconDefault, obj10);
              obj8.children = items4;
              tmp29 = closure_1_8(React5, obj8);
            }
            cResult[22] = role.name;
            cResult[23] = tmp15;
            cResult[24] = tmp29;
            tmp28 = tmp29;
          }
          const obj11 = { variant: "text-md/semibold", color: "interactive-text-active", style: tmp24, children: name };
          const tmp27 = timestampProducer(Text_Text.Text, obj11);
          cResult[19] = name;
          cResult[20] = tmp24;
          cResult[21] = tmp27;
          tmp25 = tmp27;
        }
        const obj12 = { style: tmp6.avatar, source: tmp12 };
        const tmp20 = timestampProducer(FastImageDefault, obj12);
        cResult[12] = tmp12;
        cResult[13] = tmp6.avatar;
        cResult[14] = tmp20;
        tmp18 = tmp20;
      }
      const items5 = [tmp6.container, style];
      cResult[9] = style;
      cResult[10] = tmp6.container;
      cResult[11] = items5;
      tmp17 = items5;
    }
    let avatarURL;
    if (stateFromStores != null) {
      avatarURL = stateFromStores.getAvatarURL(guildId, 40);
    }
    if (avatarURL == null) {
      avatarURL = AvatarUtilsDefault.getDefaultAvatarURL(undefined, undefined);
      const tmp10Result2 = AvatarUtilsDefault;
    }
    const source = AvatarUtilsDefault.makeSource(avatarURL);
    cResult[4] = stateFromStores;
    cResult[5] = guildId;
    cResult[6] = source;
    tmp12 = source;
    const tmp10Result = AvatarUtilsDefault;
  }
}) : ((content) => {
  content = content.content;
  if (content === undefined) {
    const intl = util.intl;
    content = intl.string(util.t["6OSasb"]);
  }
  ({ guildId, role } = content);
  ({ style, textStyle } = content);
  const tmp3 = closure_9();
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  NicknameUtilsDefault;
  if (null == role) {
    return null;
  } else {
    let avatarURL;
    if (stateFromStores != null) {
      avatarURL = stateFromStores.getAvatarURL(guildId, 40);
    }
    if (avatarURL == null) {
      avatarURL = AvatarUtilsDefault.getDefaultAvatarURL(undefined, undefined);
      const tmp6Result2 = AvatarUtilsDefault;
    }
    const source = AvatarUtilsDefault.makeSource(avatarURL);
    const tmp6Result = AvatarUtilsDefault;
    const roleIconData = RoleIconUtils.getRoleIconData(role, 16);
    const obj2 = { style: null, children: null };
    const items1 = [tmp3.container, style];
    obj2.style = items1;
    const obj3 = { style: tmp3.avatar, source };
    const items2 = [timestampProducer(FastImageDefault, obj3), ];
    const obj4 = { style: tmp3.content, children: null };
    const obj5 = { style: tmp3.contextRow, children: null };
    const obj6 = { variant: "text-md/semibold", color: "interactive-text-active", style: null, children: null };
    const obj7 = { color: null };
    const tmp4Result = RoleIconUtils;
    obj7.color = utils_ColorUtilsAll.int2hex(role.color);
    obj6.style = obj7;
    obj6.children = tmp8;
    const items3 = [timestampProducer(Text_Text.Text, obj6), , , ];
    let tmp12Result = null;
    if (null != roleIconData) {
      const obj8 = { children: null };
      const items4 = [timestampProducer(native.Spacer, { size: 4 }), ];
      const obj9 = { name: role.name, src: null, unicodeEmoji: null, size: 16 };
      ({ customIconSrc: obj13.src, unicodeEmoji: obj13.unicodeEmoji } = roleIconData);
      items4[1] = timestampProducer(RoleIconDefault, obj9);
      obj8.children = items4;
      tmp12Result = closure_1_8(React5, obj8);
    }
    items3[1] = tmp12Result;
    items3[2] = timestampProducer(native.Spacer, { size: 8 });
    items3[3] = timestampProducer(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: "4:20 PM" });
    obj5.children = items3;
    const items5 = [closure_1_8(View, obj5), ];
    const obj10 = { variant: "text-md/normal", color: "text-default", style: textStyle, children: content };
    items5[1] = timestampProducer(Text_Text.Text, obj10);
    obj4.children = items5;
    items2[1] = closure_1_8(View, obj4);
    obj2.children = items2;
    return closure_1_8(View, obj2);
  }
});