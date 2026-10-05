// === Module 8960: Header ===

// Module 8960 (Header)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import Text_Text from "Text/Text" /* 4886 */;
import BotTagDefault from "BotTag" /* 8961 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
const UserFlags = Constants.UserFlags;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, applicationNameWrapper: { flexDirection: "row" }, headerIcons: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 24 }, ellipseGroup: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 24 }, ellipse: size, botTag: { marginTop: 4, marginLeft: 8 } };
obj2 = { paddingBottom: 16, marginHorizontal: 16, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm, flexDirection: "column", justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
size = { width: 4, height: 4, marginHorizontal: 2, backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, opacity: 0.1, borderRadius: 2 };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accountScopes;
  let application;
  let bot;
  let hasFlagResult;
  let items;
  let items1;
  let items2;
  let items3;
  let user;
  const obj = react2;
  const cResult = obj.c(41);
  ({ user, application, accountScopes, bot } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === application.icon) {
    let tmp5;
    let tmp7;
    let tmp11;
    let tmp16;
    let tmp15;
    let tmp14;
    if (cResult[1] === application.id) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== user) {
      let userAvatarSource;
      if (null != user) {
        const obj4 = AvatarUtilsDefault;
        userAvatarSource = obj4.getUserAvatarSource(user);
      }
      cResult[3] = user;
      cResult[4] = userAvatarSource;
      tmp7 = userAvatarSource;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] !== tmp5) {
      const obj3 = { source: tmp5, size: native.AvatarSizes.XLARGE };
      const Avatar = native.Avatar;
      const tmp13 = hasOwnProperty(Avatar, obj3);
      cResult[5] = tmp5;
      cResult[6] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp4.ellipse) {
      const obj5 = { style: tmp4.ellipse };
      const tmp19 = hasOwnProperty(View, obj5);
      const obj6 = { style: tmp4.ellipse };
      const tmp20 = hasOwnProperty(View, obj6);
      const obj7 = { style: tmp4.ellipse };
      const tmp21 = hasOwnProperty(View, obj7);
      cResult[7] = tmp4.ellipse;
      cResult[8] = tmp19;
      cResult[9] = tmp20;
      cResult[10] = tmp21;
      tmp16 = tmp21;
      tmp15 = tmp20;
      tmp14 = tmp19;
    } else {
      tmp14 = cResult[8];
      tmp15 = cResult[9];
      tmp16 = cResult[10];
    }
    if (cResult[11] === tmp4.ellipseGroup) {
      if (cResult[12] === tmp14) {
        if (cResult[13] === tmp15) {
          let tmp22;
          let tmp26;
          if (cResult[14] === tmp16) {
            tmp22 = cResult[15];
          }
          if (cResult[16] !== tmp7) {
            const obj8 = { source: tmp7, size: native.AvatarSizes.XLARGE };
            const Avatar2 = native.Avatar;
            const tmp28 = hasOwnProperty(Avatar2, obj8);
            cResult[16] = tmp7;
            cResult[17] = tmp28;
            tmp26 = tmp28;
          } else {
            tmp26 = cResult[17];
          }
          if (cResult[18] === tmp4.headerIcons) {
            if (cResult[19] === tmp11) {
              if (cResult[20] === tmp22) {
                let tmp29;
                let tmp33;
                if (cResult[21] === tmp26) {
                  tmp29 = cResult[22];
                }
                if (cResult[23] !== application.name) {
                  const obj9 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", children: application.name };
                  const tmp35 = hasOwnProperty(Text_Text.Text, obj9);
                  cResult[23] = application.name;
                  cResult[24] = tmp35;
                  tmp33 = tmp35;
                } else {
                  tmp33 = cResult[24];
                }
                if (cResult[25] === bot) {
                  let tmp36;
                  if (cResult[26] === tmp4.botTag) {
                    tmp36 = cResult[27];
                  }
                  if (cResult[28] === tmp4.applicationNameWrapper) {
                    if (cResult[29] === tmp33) {
                      let tmp44;
                      let tmp48;
                      let tmp50;
                      if (cResult[30] === tmp36) {
                        tmp44 = cResult[31];
                      }
                      if (cResult[32] !== accountScopes.length) {
                        let stringResult;
                        if (accountScopes.length > 0) {
                          const intl2 = intl3.intl;
                          stringResult = intl2.string(intl3.t.jFbDnJ);
                        } else {
                          const intl = intl3.intl;
                          stringResult = intl.string(intl3.t["X+Fdpo"]);
                        }
                        cResult[32] = accountScopes.length;
                        cResult[33] = stringResult;
                        tmp48 = stringResult;
                      } else {
                        tmp48 = cResult[33];
                      }
                      if (cResult[34] !== tmp48) {
                        const obj10 = { variant: "heading-md/normal", color: "text-default", children: tmp48 };
                        const tmp52 = hasOwnProperty(Text_Text.Text, obj10);
                        cResult[34] = tmp48;
                        cResult[35] = tmp52;
                        tmp50 = tmp52;
                      } else {
                        tmp50 = cResult[35];
                      }
                      if (cResult[36] === tmp4.header) {
                        if (cResult[37] === tmp44) {
                          if (cResult[38] === tmp50) {
                            let tmp53;
                            if (cResult[39] === tmp29) {
                              tmp53 = cResult[40];
                            }
                            return tmp53;
                          }
                        }
                      }
                      const obj11 = { style: tmp4.header, children: items };
                      items = [tmp29, tmp44, tmp50];
                      const tmp56 = metroRequire(View, obj11);
                      cResult[36] = tmp4.header;
                      cResult[37] = tmp44;
                      cResult[38] = tmp50;
                      cResult[39] = tmp29;
                      cResult[40] = tmp56;
                      tmp53 = tmp56;
                    }
                  }
                  const obj12 = { style: tmp4.applicationNameWrapper, children: items1 };
                  items1 = [tmp33, tmp36];
                  const tmp47 = metroRequire(View, obj12);
                  cResult[28] = tmp4.applicationNameWrapper;
                  cResult[29] = tmp33;
                  cResult[30] = tmp36;
                  cResult[31] = tmp47;
                  tmp44 = tmp47;
                }
                let tmp39Result = null;
                if (null != bot) {
                  const obj13 = { style: tmp4.botTag, verified: hasFlagResult };
                  hasFlagResult = null != bot.public_flags;
                  const tmp41 = BotTagDefault;
                  if (hasFlagResult) {
                    const tmpResult = FlagUtils;
                    hasFlagResult = tmpResult.hasFlag(bot.public_flags, UserFlags.VERIFIED_BOT);
                  }
                  tmp39Result = hasOwnProperty(tmp41, obj13);
                }
                cResult[25] = bot;
                cResult[26] = tmp4.botTag;
                cResult[27] = tmp39Result;
                tmp36 = tmp39Result;
              }
            }
          }
          const obj14 = { style: tmp4.headerIcons, children: items2 };
          items2 = [tmp11, tmp22, tmp26];
          const tmp32 = metroRequire(View, obj14);
          cResult[18] = tmp4.headerIcons;
          cResult[19] = tmp11;
          cResult[20] = tmp22;
          cResult[21] = tmp26;
          cResult[22] = tmp32;
          tmp29 = tmp32;
        }
      }
    }
    const obj15 = { style: tmp4.ellipseGroup, children: items3 };
    items3 = [tmp14, tmp15, tmp16];
    const tmp25 = metroRequire(View, obj15);
    cResult[11] = tmp4.ellipseGroup;
    cResult[12] = tmp14;
    cResult[13] = tmp15;
    cResult[14] = tmp16;
    cResult[15] = tmp25;
    tmp22 = tmp25;
  }
  const obj16 = { id: application.id, icon: application.icon };
  const obj2 = AvatarUtilsDefault;
  const applicationIconSource = obj2.getApplicationIconSource(obj16);
  cResult[0] = application.icon;
  cResult[1] = application.id;
  cResult[2] = applicationIconSource;
  tmp5 = applicationIconSource;
}) : ((accountScopes) => {
  let application;
  let bot;
  let hasFlagResult;
  let items;
  let items1;
  let items2;
  let items3;
  let stringResult;
  let user;
  ({ user, application, bot } = accountScopes);
  accountScopes = accountScopes.accountScopes;
  const tmp = closure_7();
  let userAvatarSource;
  const obj = AvatarUtilsDefault;
  const obj2 = { id: application.id, icon: application.icon };
  const applicationIconSource = obj.getApplicationIconSource(obj2);
  if (null != user) {
    const tmp2Result = AvatarUtilsDefault;
    userAvatarSource = tmp2Result.getUserAvatarSource(user);
  }
  const obj3 = { style: tmp.header, children: items2 };
  const obj4 = { style: tmp.headerIcons, children: items };
  const obj5 = { source: applicationIconSource, size: native.AvatarSizes.XLARGE };
  const Avatar = native.Avatar;
  items = [hasOwnProperty(Avatar, obj5), , ];
  const obj6 = { style: tmp.ellipseGroup, children: items1 };
  items1 = [, , ];
  const obj7 = { style: tmp.ellipse };
  items1[0] = hasOwnProperty(View, obj7);
  const obj8 = { style: tmp.ellipse };
  items1[1] = hasOwnProperty(View, obj8);
  const obj9 = { style: tmp.ellipse };
  items1[2] = hasOwnProperty(View, obj9);
  items[1] = metroRequire(View, obj6);
  const obj10 = { source: userAvatarSource, size: native.AvatarSizes.XLARGE };
  const Avatar2 = native.Avatar;
  items[2] = hasOwnProperty(Avatar2, obj10);
  items2 = [metroRequire(View, obj4), , ];
  const obj11 = { style: tmp.applicationNameWrapper, children: items3 };
  items3 = [, ];
  const obj12 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", children: application.name };
  items3[0] = hasOwnProperty(Text_Text.Text, obj12);
  let tmp8Result = null;
  if (null != bot) {
    const obj13 = { style: tmp.botTag, verified: hasFlagResult };
    hasFlagResult = null != bot.public_flags;
    const tmp2Result2 = BotTagDefault;
    if (hasFlagResult) {
      const tmp9Result = FlagUtils;
      hasFlagResult = tmp9Result.hasFlag(bot.public_flags, UserFlags.VERIFIED_BOT);
    }
    tmp8Result = hasOwnProperty(tmp2Result2, obj13);
  }
  items3[1] = tmp8Result;
  items2[1] = metroRequire(View, obj11);
  const Text = Text_Text.Text;
  if (accountScopes.length > 0) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(intl3.t.jFbDnJ);
  } else {
    const intl = intl3.intl;
    stringResult = intl.string(intl3.t["X+Fdpo"]);
  }
  items2[2] = hasOwnProperty(Text, { variant: "heading-md/normal", color: "text-default", children: stringResult });
  return metroRequire(View, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/oauth2/native/Header.tsx");

export default tmp5;