// === Module 18314: GuildRoleSubscriptionTierTemplateRolePreview ===

// Module 18314 (GuildRoleSubscriptionTierTemplateRolePreview)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtilsAll from "utils/ColorUtils" /* 1103 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5086 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5405 */;
import FastImageDefault from "FastImage" /* 6164 */;
import RoleIconDefault from "RoleIcon" /* 6888 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flexDirection: "row", padding: 16, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, avatar: { width: 40, height: 40, borderRadius: 20 }, content: { marginStart: 16 }, contextRow: { flexDirection: "row", alignItems: "center" } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", padding: 16, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateRolePreview.tsx");

export const GuildRoleSubscriptionRolePreview = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionRolePreview(arg0) {
  const cResult = c.c(40);
  ({ content, style, textStyle, roleColor, roleImage, roleName, guildId } = arg0);
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
  const tmp6 = closure_8();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function w() {
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
  const stateFromStores = useStateFromStores.useStateFromStores(tmp7, tmp8);
  const tmpResult = useStateFromStores;
  const name = NicknameUtilsDefault.useName(guildId, null, stateFromStores);
  if (cResult[4] === style) {
    if (cResult[5] === tmp6.container) {
      let tmp13 = cResult[6];
    }
    if (cResult[7] !== roleImage) {
      const obj2 = { uri: roleImage };
      cResult[7] = roleImage;
      cResult[8] = obj2;
      let tmp14 = obj2;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] === tmp6.avatar) {
      if (cResult[10] === tmp14) {
        let tmp15 = cResult[11];
      }
      ({ content: content2, contextRow } = tmp6);
      if (cResult[12] !== roleColor) {
        const int2hexResult = utils_ColorUtilsAll.int2hex(roleColor);
        cResult[12] = roleColor;
        cResult[13] = int2hexResult;
        let tmp18 = int2hexResult;
      } else {
        tmp18 = cResult[13];
      }
      if (cResult[14] !== tmp18) {
        const obj4 = { color: tmp18 };
        cResult[14] = tmp18;
        cResult[15] = obj4;
        let tmp21 = obj4;
      } else {
        tmp21 = cResult[15];
      }
      if (cResult[16] === name) {
        if (cResult[17] === tmp21) {
          let tmp22 = cResult[18];
        }
        const _Symbol = Symbol;
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp27 = timestampProducer(native.Spacer, { size: 4 });
          cResult[19] = tmp27;
          let tmp25 = tmp27;
        } else {
          tmp25 = cResult[19];
        }
        if (cResult[20] === roleImage) {
          if (cResult[21] === roleName) {
            let tmp28 = cResult[22];
          }
          const _Symbol2 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp34 = timestampProducer(native.Spacer, { size: 8 });
            const tmp35 = timestampProducer(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: "4:20 PM" });
            cResult[23] = tmp34;
            cResult[24] = tmp35;
            let tmp32 = tmp35;
            let tmp31 = tmp34;
          } else {
            tmp31 = cResult[23];
            tmp32 = cResult[24];
          }
          if (cResult[25] === tmp6.contextRow) {
            if (cResult[26] === tmp22) {
              if (cResult[27] === tmp28) {
                let tmp36 = cResult[28];
              }
              if (cResult[29] === tmp4) {
                if (cResult[30] === textStyle) {
                  let tmp40 = cResult[31];
                }
                if (cResult[32] === tmp6.content) {
                  if (cResult[33] === tmp36) {
                    if (cResult[34] === tmp40) {
                      let tmp43 = cResult[35];
                    }
                    if (cResult[36] === tmp43) {
                      if (cResult[37] === tmp13) {
                        if (cResult[38] === tmp15) {
                          let tmp47 = cResult[39];
                        }
                        return tmp47;
                      }
                    }
                    const obj5 = { style: tmp13, children: null };
                    const items1 = [tmp15, tmp43];
                    obj5.children = items1;
                    const tmp50 = React5(View, obj5);
                    cResult[36] = tmp43;
                    cResult[37] = tmp13;
                    cResult[38] = tmp15;
                    cResult[39] = tmp50;
                    tmp47 = tmp50;
                  }
                }
                const obj7 = { style: content2, children: null };
                const items2 = [tmp36, tmp40];
                obj7.children = items2;
                const tmp46 = React5(View, obj7);
                cResult[32] = tmp6.content;
                cResult[33] = tmp36;
                cResult[34] = tmp40;
                cResult[35] = tmp46;
                tmp43 = tmp46;
              }
              const obj8 = { variant: "text-md/normal", color: "text-default", style: textStyle, children: tmp4 };
              const tmp42 = timestampProducer(Text_Text.Text, obj8);
              cResult[29] = tmp4;
              cResult[30] = textStyle;
              cResult[31] = tmp42;
              tmp40 = tmp42;
            }
          }
          const obj9 = { style: contextRow, children: null };
          const items3 = [tmp22, tmp25, tmp28, tmp31, tmp32];
          obj9.children = items3;
          const tmp39 = React5(View, obj9);
          cResult[25] = tmp6.contextRow;
          cResult[26] = tmp22;
          cResult[27] = tmp28;
          cResult[28] = tmp39;
          tmp36 = tmp39;
        }
        const obj10 = { name: roleName, src: roleImage, size: 16 };
        const tmp30 = timestampProducer(RoleIconDefault, obj10);
        cResult[20] = roleImage;
        cResult[21] = roleName;
        cResult[22] = tmp30;
        tmp28 = tmp30;
      }
      const obj11 = { variant: "text-md/semibold", color: "interactive-text-active", style: tmp21, children: name };
      const tmp24 = timestampProducer(Text_Text.Text, obj11);
      cResult[16] = name;
      cResult[17] = tmp21;
      cResult[18] = tmp24;
      tmp22 = tmp24;
    }
    const obj12 = { style: tmp6.avatar, source: tmp14 };
    const tmp17 = timestampProducer(FastImageDefault, obj12);
    cResult[9] = tmp6.avatar;
    cResult[10] = tmp14;
    cResult[11] = tmp17;
    tmp15 = tmp17;
  }
  const items4 = [tmp6.container, style];
  cResult[4] = style;
  cResult[5] = tmp6.container;
  cResult[6] = items4;
  tmp13 = items4;
}) : (function GuildRoleSubscriptionRolePreview(content) {
  content = content.content;
  if (content === undefined) {
    const intl = util.intl;
    content = intl.string(util.t["6OSasb"]);
  }
  const roleImage = content.roleImage;
  ({ style, textStyle, roleColor, roleName, guildId } = content);
  const tmp3 = closure_8();
  const items = [UserStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = { style: null, children: null };
  const items1 = [tmp3.container, style];
  obj3.style = items1;
  const name = NicknameUtilsDefault.useName(guildId, null, stateFromStores);
  const items2 = [timestampProducer(FastImageDefault, { style: tmp3.avatar, source: { uri: roleImage } }), ];
  const obj5 = { style: tmp3.content, children: null };
  const obj6 = { style: tmp3.contextRow, children: null };
  const obj7 = { variant: "text-md/semibold", color: "interactive-text-active", style: null, children: null };
  const obj8 = { color: null };
  const obj4 = { style: tmp3.avatar, source: { uri: roleImage } };
  obj8.color = utils_ColorUtilsAll.int2hex(roleColor);
  obj7.style = obj8;
  obj7.children = name;
  const items3 = [timestampProducer(Text_Text.Text, obj7), timestampProducer(native.Spacer, { size: 4 }), timestampProducer(RoleIconDefault, { name: roleName, src: roleImage, size: 16 }), timestampProducer(native.Spacer, { size: 8 }), timestampProducer(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: "4:20 PM" })];
  obj6.children = items3;
  const items4 = [React5(View, obj6), timestampProducer(Text_Text.Text, { variant: "text-md/normal", color: "text-default", style: textStyle, children: content })];
  obj5.children = items4;
  items2[1] = React5(View, obj5);
  obj3.children = items2;
  return React5(View, obj3);
});