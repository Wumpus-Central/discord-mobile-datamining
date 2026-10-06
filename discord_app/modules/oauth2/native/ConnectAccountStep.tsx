// discord_app/modules/oauth2/native/ConnectAccountStep.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import CheckmarkLargeIcon2 from "../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import PlatformsDefault from "../../../lib/Platforms.tsx";
import ApplicationActionCreatorsDefault from "../../applications/ApplicationActionCreators.tsx";
import authorizeConnectionDefault from "../../connections/authorizeConnection.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let clientId, currentUser;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let size;
let size1;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { flexDirection: "column", gap: 16, width: "100%" },
  header: { flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 8 },
  headerIcons: { flexDirection: "row", alignItems: "center", gap: 16, marginBottom: 8 },
  card: obj2,
  cardName: { flex: 1, minWidth: 0 },
  cardInfo: { flex: 1, minWidth: 0, flexDirection: "column", gap: 2 },
  platformIcon: size,
  platformIconSmall: size1,
  infoNotice: obj3,
  infoText: { flex: 1 },
  divider: obj4,
};
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
  padding: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.md,
};
createStyles = createStyles.createStyles;
size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm };
size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj3 = {
  flexDirection: "row",
  alignItems: "flex-start",
  gap: 8,
  padding: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
  borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.sm,
};
obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 8 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (clientId) => {
      let first;
      let id;
      let items4;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp9;
      let obj = clientId(576);
      const cResult = obj.c(69);
      clientId = clientId.clientId;
      const platformType = clientId.platformType;
      const tmp4 = closure_10();
      const tmp6 = platformType(4797)();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ApplicationStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== clientId) {
        const fn = function x() {
          return ApplicationStore.getApplication(clientId);
        };
        const items1 = [clientId];
        cResult[1] = clientId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp10 = items1;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = clientId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [AuthenticationStore, UserStore];
        class C {
          constructor() {
            currentUser = null;
            if (null != id.getId()) {
              currentUser = currentUser.getCurrentUser();
            }
            return currentUser;
          }
        }
        cResult[4] = items2;
        cResult[5] = C;
        tmp13 = C;
        tmp12 = items2;
      } else {
        tmp12 = cResult[4];
        tmp13 = cResult[5];
      }
      const tmpResult3 = clientId(504);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp12, tmp13);
      if (cResult[6] === platformType) {
        let tmp21;
        let tmp24;
        let tmp29;
        let tmp28;
        let tmp34;
        if (cResult[9] !== stateFromStores) {
          let applicationIconSource;
          if (null != stateFromStores) {
            const obj2 = { id: null, icon: null };
            ({ id: obj7.id, icon: obj7.icon } = stateFromStores);
            const tmp5Result = platformType(1402);
            applicationIconSource = tmp5Result.getApplicationIconSource(obj2);
          }
          cResult[9] = stateFromStores;
          class C {
            constructor() {
              currentUser = null;
              if (null != id.getId()) {
                currentUser = currentUser.getCurrentUser();
              }
              return currentUser;
            }
          }
          cResult[10] = applicationIconSource;
          tmp21 = applicationIconSource;
        } else {
          tmp21 = cResult[10];
        }
        if (cResult[11] !== stateFromStores1) {
          let userAvatarSource;
          if (null != stateFromStores1) {
            const tmp5Result3 = platformType(1402);
            userAvatarSource = tmp5Result3.getUserAvatarSource(stateFromStores1);
          }
          cResult[11] = stateFromStores1;
          class C {
            constructor() {
              currentUser = null;
              if (null != id.getId()) {
                currentUser = currentUser.getCurrentUser();
              }
              return currentUser;
            }
          }
          cResult[12] = userAvatarSource;
          tmp24 = userAvatarSource;
        } else {
          tmp24 = cResult[12];
        }
        let str;
        class C {
          constructor() {
            currentUser = null;
            if (null != id.getId()) {
              currentUser = currentUser.getCurrentUser();
            }
            return currentUser;
          }
        }
        if (str == null) {
          str = "";
        }
        if (cResult[13] !== clientId) {
          class G {
            constructor() {
              const obj = ApplicationActionCreatorsDefault;
              const application = obj.fetchApplication(clientId);
            }
          }
          const items3 = [clientId];
          cResult[13] = clientId;
          class C {
            constructor() {
              currentUser = null;
              if (null != id.getId()) {
                currentUser = currentUser.getCurrentUser();
              }
              return currentUser;
            }
          }
          cResult[14] = items3;
          cResult[15] = G;
          tmp29 = G;
          tmp28 = items3;
        } else {
          class G {
            constructor() {
              const obj = ApplicationActionCreatorsDefault;
              const application = obj.fetchApplication(clientId);
            }
          }
          tmp29 = cResult[15];
        }
        const effect = react.useEffect(tmp29, tmp28);
        if (cResult[16] !== platformType) {
          class P {
            constructor() {
              const obj = { platformType, location: "OAuth2 Connect Account Step" };
              authorizeConnectionDefault(obj);
            }
          }
          cResult[16] = platformType;
          cResult[17] = P;
          class C {
            constructor() {
              currentUser = null;
              if (null != id.getId()) {
                currentUser = currentUser.getCurrentUser();
              }
              return currentUser;
            }
          }
        } else {
          class P {
            constructor() {
              const obj = { platformType, location: "OAuth2 Connect Account Step" };
              authorizeConnectionDefault(obj);
            }
          }
        }
        const container = tmp4.container;
        if (cResult[18] !== tmp21) {
          class P {
            constructor() {
              const obj = { platformType, location: "OAuth2 Connect Account Step" };
              authorizeConnectionDefault(obj);
            }
          }
          ({ source: tmp21, size: clientId(1188).AvatarSizes.XLARGE });
          const Avatar = tmp(1188).Avatar;
          class C {
            constructor() {
              currentUser = null;
              if (null != id.getId()) {
                currentUser = currentUser.getCurrentUser();
              }
              return currentUser;
            }
          }
          cResult[18] = tmp21;
          cResult[19] = tmp33;
        } else {
          class P {
            constructor() {
              const obj = { platformType, location: "OAuth2 Connect Account Step" };
              authorizeConnectionDefault(obj);
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              const obj = { platformType, location: "OAuth2 Connect Account Step" };
              authorizeConnectionDefault(obj);
            }
          }
          const obj4 = { color: platformType(587).colors.INTERACTIVE_TEXT_DEFAULT, size: "md" };
          const MoreHorizontalIcon = tmp(7588).MoreHorizontalIcon;
          const tmp35 = closure_8(MoreHorizontalIcon, obj4);
          class C {
            constructor() {
              currentUser = null;
              if (null != id.getId()) {
                currentUser = currentUser.getCurrentUser();
              }
              return currentUser;
            }
          }
          cResult[20] = tmp35;
          tmp34 = tmp35;
        } else {
          class P {
            constructor() {
              const obj = { platformType, location: "OAuth2 Connect Account Step" };
              authorizeConnectionDefault(obj);
            }
          }
        }
        if (cResult[21] !== tmp24) {
          class P {
            constructor() {
              const obj = { platformType, location: "OAuth2 Connect Account Step" };
              authorizeConnectionDefault(obj);
            }
          }
          ({ source: tmp24, size: clientId(1188).AvatarSizes.XLARGE });
          const Avatar2 = tmp(1188).Avatar;
          class C {
            constructor() {
              currentUser = null;
              if (null != id.getId()) {
                currentUser = currentUser.getCurrentUser();
              }
              return currentUser;
            }
          }
          cResult[21] = tmp24;
          cResult[22] = tmp37;
        } else {
          class P {
            constructor() {
              const obj = { platformType, location: "OAuth2 Connect Account Step" };
              authorizeConnectionDefault(obj);
            }
          }
        }
        if (cResult[23] === tmp4.headerIcons) {
          class P {
            constructor() {
              const obj = { platformType, location: "OAuth2 Connect Account Step" };
              authorizeConnectionDefault(obj);
            }
          }
        }
        const obj6 = { style: tmp4.headerIcons, children: items4 };
        items4 = [tmp33, tmp34, tmp37];
        cResult[23] = tmp4.headerIcons;
        cResult[24] = tmp33;
        cResult[25] = tmp37;
        cResult[26] = closure_9(View, obj6);
        const tmp41 = closure_9(View, obj6);
      }
      const tmp5Result4 = platformType(5449);
      const value = tmp5Result4.get(platformType);
      let source = null;
      if (null != value) {
        class P {
          constructor() {
            const obj = { platformType, location: "OAuth2 Connect Account Step" };
            authorizeConnectionDefault(obj);
          }
        }
        const makeSource = tmp20.makeSource;
        const icon = value.icon;
        const tmpResult4 = clientId(4735);
        source = makeSource(tmpResult4.isThemeLight(tmp6) ? icon.lightPNG : icon.darkPNG);
      }
      cResult[6] = platformType;
      cResult[7] = tmp6;
      cResult[8] = source;
    }
  : (clientId) => {
      let id;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      clientId = clientId.clientId;
      const platformType = clientId.platformType;
      const platformName = clientId.platformName;
      const tmp = closure_10();
      const tmp4 = platformType(4797)();
      let obj = clientId(504);
      const items = [ApplicationStore];
      const items1 = [clientId];
      const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(clientId), items1);
      const items2 = [AuthenticationStore, UserStore];
      const obj2 = clientId(504);
      const stateFromStores1 = obj2.useStateFromStores(items2, () => {
        currentUser = null;
        if (null != id.getId()) {
          currentUser = currentUser.getCurrentUser();
        }
        return currentUser;
      });
      const obj3 = platformType(5449);
      const value = obj3.get(platformType);
      let source = null;
      if (null != value) {
        const makeSource = clientId(1402).makeSource;
        clientId(1402);
        const icon = value.icon;
        const tmp5Result2 = clientId(4735);
        source = makeSource(tmp5Result2.isThemeLight(tmp4) ? icon.lightPNG : icon.darkPNG);
      }
      let applicationIconSource;
      if (null != stateFromStores) {
        const obj4 = { id: null, icon: null };
        ({ id: obj6.id, icon: obj6.icon } = stateFromStores);
        const tmp2Result = platformType(1402);
        applicationIconSource = tmp2Result.getApplicationIconSource(obj4);
      }
      let userAvatarSource;
      if (null != stateFromStores1) {
        const tmp2Result2 = platformType(1402);
        userAvatarSource = tmp2Result2.getUserAvatarSource(stateFromStores1);
      }
      let str;
      if (stateFromStores != null) {
        str = stateFromStores.name;
      }
      if (str == null) {
        str = "";
      }
      const items3 = [clientId];
      const effect = react.useEffect(() => {
        const obj = ApplicationActionCreatorsDefault;
        const application = obj.fetchApplication(clientId);
      }, items3);
      const obj5 = { style: tmp.container, children: items6 };
      const obj7 = { style: tmp.header, children: items5 };
      const obj8 = { style: tmp.headerIcons, children: items4 };
      const obj9 = { source: applicationIconSource, size: clientId(1188).AvatarSizes.XLARGE };
      const Avatar = tmp5(1188).Avatar;
      items4 = [closure_8(Avatar, obj9), ,];
      const obj10 = { color: platformType(587).colors.INTERACTIVE_TEXT_DEFAULT, size: "md" };
      const MoreHorizontalIcon = tmp5(7588).MoreHorizontalIcon;
      items4[1] = closure_8(MoreHorizontalIcon, obj10);
      const obj11 = { source: userAvatarSource, size: clientId(1188).AvatarSizes.XLARGE };
      const Avatar2 = tmp5(1188).Avatar;
      items4[2] = closure_8(Avatar2, obj11);
      items5 = [closure_9(View, obj8), ,];
      const obj12 = {
        variant: "text-lg/normal",
        color: "text-default",
        children: intl.string(clientId(1126).t.uT1CPa),
      };
      const Text = tmp5(4892).Text;
      intl = tmp5(1126).intl;
      items5[1] = closure_8(Text, obj12);
      items5[2] = closure_8(clientId(4892).Text, {
        variant: "heading-xl/semibold",
        color: "mobile-text-heading-primary",
        children: str,
      });
      items6 = [closure_9(View, obj7), , ,];
      const obj13 = {
        variant: "text-sm/normal",
        color: "text-default",
        children: intl2.format(clientId(1126).t["aJRE/Q"], { applicationName: str, platformName }),
      };
      const Text2 = tmp5(4892).Text;
      intl2 = tmp5(1126).intl;
      items6[1] = closure_8(Text2, obj13);
      let tmp16Result = null;
      const obj14 = { style: tmp.card, children: items7 };
      if (null != source) {
        const obj15 = { source, style: tmp.platformIcon, disableColor: true };
        tmp16Result = closure_8(tmp5(1188).Icon, obj15);
      }
      items7 = [tmp16Result, ,];
      const obj16 = { variant: "text-md/medium", style: tmp.cardName, color: "text-default", children: platformName };
      items7[1] = closure_8(clientId(4892).Text, obj16);
      const obj17 = {
        variant: "primary",
        size: "sm",
        onPress() {
          const obj = { platformType, location: "OAuth2 Connect Account Step" };
          authorizeConnectionDefault(obj);
        },
        text: intl3.string(clientId(1126).t.S0W8Z5),
      };
      const Button = tmp5(5601).Button;
      intl3 = tmp5(1126).intl;
      items7[2] = closure_8(Button, obj17);
      items6[2] = closure_9(View, obj14);
      const obj18 = { style: tmp.infoNotice, children: items8 };
      const obj19 = { color: platformType(587).colors.ICON_FEEDBACK_INFO, size: "sm" };
      const CircleInformationIcon = tmp5(4818).CircleInformationIcon;
      items8 = [closure_8(CircleInformationIcon, obj19)];
      const obj20 = {
        variant: "text-sm/normal",
        color: "text-default",
        style: tmp.infoText,
        children: intl4.format(clientId(1126).t["8psEFX"], { platformName, applicationName: str }),
      };
      const Text3 = tmp5(4892).Text;
      intl4 = tmp5(1126).intl;
      items8[1] = closure_8(Text3, obj20);
      items6[3] = closure_9(View, obj18);
      return closure_9(View, obj5);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let applicationName;
      let connectedAccount;
      let items;
      let items1;
      let items2;
      let platformName;
      let platformType;
      const obj = react2;
      const cResult = obj.c(38);
      ({ platformType, platformName, connectedAccount, applicationName } = arg0);
      const tmp4 = closure_10();
      const tmp6 = useThemeDefault();
      if (cResult[0] === platformType) {
        let tmp7;
        let tmp11;
        let tmp13;
        if (cResult[1] === tmp6) {
          tmp7 = cResult[2];
        }
        const container = tmp4.container;
        if (cResult[3] !== platformName) {
          const intl = intl5.intl;
          const obj2 = { platformName };
          const formatResult = intl.format(intl5.t["+oaRw3"], obj2);
          cResult[3] = platformName;
          cResult[4] = formatResult;
          tmp11 = formatResult;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== tmp11) {
          const obj3 = { variant: "text-sm/normal", color: "text-default", children: tmp11 };
          const tmp15 = metroImportAll(Text_Text.Text, obj3);
          cResult[5] = tmp11;
          cResult[6] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] === tmp7) {
          let tmp17;
          let tmp20;
          if (cResult[8] === tmp4.platformIconSmall) {
            tmp17 = cResult[9];
          }
          const cardInfo = tmp4.cardInfo;
          if (cResult[10] !== connectedAccount.name) {
            const obj4 = {
              variant: "text-md/medium",
              color: "mobile-text-heading-primary",
              children: connectedAccount.name,
            };
            const tmp22 = metroImportAll(Text_Text.Text, obj4);
            cResult[10] = connectedAccount.name;
            cResult[11] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[11];
          }
          if (cResult[12] === connectedAccount.id) {
            let tmp23;
            let tmp25;
            if (cResult[13] === platformName) {
              tmp23 = cResult[14];
            }
            if (cResult[15] !== tmp23) {
              const obj5 = { variant: "text-xs/normal", color: "text-muted", children: tmp23 };
              const tmp27 = metroImportAll(Text_Text.Text, obj5);
              cResult[15] = tmp23;
              cResult[16] = tmp27;
              tmp25 = tmp27;
            } else {
              tmp25 = cResult[16];
            }
            if (cResult[17] === tmp4.cardInfo) {
              if (cResult[18] === tmp25) {
                let tmp28;
                let tmp33;
                if (cResult[19] === tmp20) {
                  tmp28 = cResult[20];
                }
                const _Symbol = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj6 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, size: "sm" };
                  const CheckmarkLargeIcon = CheckmarkLargeIcon2.CheckmarkLargeIcon;
                  const tmp35 = metroImportAll(CheckmarkLargeIcon, obj6);
                  cResult[21] = tmp35;
                  tmp33 = tmp35;
                } else {
                  tmp33 = cResult[21];
                }
                if (cResult[22] === tmp4.card) {
                  if (cResult[23] === tmp28) {
                    let tmp36;
                    let tmp40;
                    let tmp42;
                    let tmp45;
                    if (cResult[24] === tmp17) {
                      tmp36 = cResult[25];
                    }
                    if (cResult[26] !== applicationName) {
                      const intl3 = intl5.intl;
                      const obj7 = { applicationName };
                      const formatResult1 = intl3.format(intl5.t.pyRNXJ, obj7);
                      cResult[26] = applicationName;
                      cResult[27] = formatResult1;
                      tmp40 = formatResult1;
                    } else {
                      tmp40 = cResult[27];
                    }
                    if (cResult[28] !== tmp40) {
                      const obj8 = { variant: "text-sm/normal", color: "text-default", children: tmp40 };
                      const tmp44 = metroImportAll(Text_Text.Text, obj8);
                      cResult[28] = tmp40;
                      cResult[29] = tmp44;
                      tmp42 = tmp44;
                    } else {
                      tmp42 = cResult[29];
                    }
                    if (cResult[30] !== tmp4.divider) {
                      const obj9 = { style: tmp4.divider };
                      const tmp48 = metroImportAll(View, obj9);
                      cResult[30] = tmp4.divider;
                      cResult[31] = tmp48;
                      tmp45 = tmp48;
                    } else {
                      tmp45 = cResult[31];
                    }
                    if (cResult[32] === tmp4.container) {
                      if (cResult[33] === tmp36) {
                        if (cResult[34] === tmp42) {
                          if (cResult[35] === tmp45) {
                            let tmp49;
                            if (cResult[36] === tmp13) {
                              tmp49 = cResult[37];
                            }
                            return tmp49;
                          }
                        }
                      }
                    }
                    const obj10 = { style: container, children: items };
                    items = [tmp13, tmp36, tmp42, tmp45];
                    const tmp52 = React4(View, obj10);
                    cResult[32] = tmp4.container;
                    cResult[33] = tmp36;
                    cResult[34] = tmp42;
                    cResult[35] = tmp45;
                    cResult[36] = tmp13;
                    cResult[37] = tmp52;
                    tmp49 = tmp52;
                  }
                }
                const obj11 = { style: tmp16, children: items1 };
                items1 = [tmp17, tmp28, tmp33];
                const tmp39 = React4(View, obj11);
                cResult[22] = tmp4.card;
                cResult[23] = tmp28;
                cResult[24] = tmp17;
                cResult[25] = tmp39;
                tmp36 = tmp39;
              }
            }
            const obj12 = { style: cardInfo, children: items2 };
            items2 = [tmp20, tmp25];
            const tmp31 = React4(View, obj12);
            cResult[17] = tmp4.cardInfo;
            cResult[18] = tmp25;
            cResult[19] = tmp20;
            cResult[20] = tmp31;
            tmp28 = tmp31;
          }
          const intl2 = intl5.intl;
          const obj13 = { platformName, connectedAccountId: connectedAccount.id };
          const formatResult2 = intl2.format(intl5.t.Dkd7sE, obj13);
          cResult[12] = connectedAccount.id;
          cResult[13] = platformName;
          cResult[14] = formatResult2;
          tmp23 = formatResult2;
        }
        let tmp18 = null;
        if (null != tmp7) {
          const obj14 = { source: tmp7, style: tmp4.platformIconSmall, disableColor: true };
          tmp18 = metroImportAll(native.Icon, obj14);
        }
        cResult[7] = tmp7;
        cResult[8] = tmp4.platformIconSmall;
        cResult[9] = tmp18;
        tmp17 = tmp18;
      }
      const tmp5Result = PlatformsDefault;
      const value = tmp5Result.get(platformType);
      let source = null;
      if (null != value) {
        const makeSource = AvatarUtils.makeSource;
        AvatarUtils;
        const icon = value.icon;
        const tmpResult2 = shared;
        source = makeSource(tmpResult2.isThemeLight(tmp6) ? icon.lightPNG : icon.darkPNG);
      }
      cResult[0] = platformType;
      cResult[1] = tmp6;
      cResult[2] = source;
      tmp7 = source;
    }
  : (arg0) => {
      let applicationName;
      let connectedAccount;
      let intl;
      let intl2;
      let intl3;
      let items;
      let items1;
      let items2;
      let obj10;
      let platformName;
      let platformType;
      ({ platformName, connectedAccount } = arg0);
      ({ platformType, applicationName } = arg0);
      const tmp = closure_10();
      const tmp4 = useThemeDefault();
      const obj = PlatformsDefault;
      const value = obj.get(platformType);
      let source = null;
      if (null != value) {
        const makeSource = AvatarUtils.makeSource;
        AvatarUtils;
        const icon = value.icon;
        const obj2 = shared;
        source = makeSource(obj2.isThemeLight(tmp4) ? icon.lightPNG : icon.darkPNG);
      }
      const obj3 = { style: tmp.container, children: items };
      const obj4 = {
        variant: "text-sm/normal",
        color: "text-default",
        children: intl.format(intl5.t["+oaRw3"], { platformName }),
      };
      const Text = Text_Text.Text;
      intl = intl5.intl;
      items = [metroImportAll(Text, obj4), , ,];
      let tmp11Result = null;
      const obj5 = { style: tmp.card, children: items1 };
      if (null != source) {
        const obj6 = { source, style: tmp.platformIconSmall, disableColor: true };
        tmp11Result = metroImportAll(native.Icon, obj6);
      }
      items1 = [tmp11Result, ,];
      const obj7 = { style: tmp.cardInfo, children: items2 };
      items2 = [,];
      const obj8 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: connectedAccount.name };
      items2[0] = metroImportAll(Text_Text.Text, obj8);
      const obj9 = { variant: "text-xs/normal", color: "text-muted", children: intl2.format(intl5.t.Dkd7sE, obj10) };
      const Text2 = Text_Text.Text;
      intl2 = intl5.intl;
      obj10 = { platformName, connectedAccountId: connectedAccount.id };
      items2[1] = metroImportAll(Text2, obj9);
      items1[1] = React4(View, obj7);
      const obj11 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, size: "sm" };
      const CheckmarkLargeIcon = CheckmarkLargeIcon2.CheckmarkLargeIcon;
      items1[2] = metroImportAll(CheckmarkLargeIcon, obj11);
      items[1] = React4(View, obj5);
      const obj12 = {
        variant: "text-sm/normal",
        color: "text-default",
        children: intl3.format(intl5.t.pyRNXJ, { applicationName }),
      };
      const Text3 = Text_Text.Text;
      intl3 = intl5.intl;
      items[2] = metroImportAll(Text3, obj12);
      const obj13 = { style: tmp.divider };
      items[3] = metroImportAll(View, obj13);
      return React4(View, obj3);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/oauth2/native/ConnectAccountStep.tsx");

export default tmp4;
export const ConnectedAccountCard = tmp5;
