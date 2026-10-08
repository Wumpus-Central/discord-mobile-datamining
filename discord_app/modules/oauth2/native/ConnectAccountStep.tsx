// === Module 9146: ConnectAccountStep ===

// Module 9146 (ConnectAccountStep)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import AvatarUtils from "AvatarUtils" /* 1414 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4775 */;
import shared from "shared" /* 4929 */;
import useThemeDefault from "useTheme" /* 4991 */;
import Text_Text from "Text/Text" /* 5086 */;
import PlatformsDefault from "Platforms" /* 5759 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6842 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9147 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5436 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flexDirection: "column", gap: 16, width: "100%" }, header: { flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 8 }, headerIcons: { flexDirection: "row", alignItems: "center", gap: 16, marginBottom: 8 }, card: { flexDirection: "row", alignItems: "center", gap: 12, padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.md }, cardName: { flex: 1, minWidth: 0 }, cardInfo: { flex: 1, minWidth: 0, flexDirection: "column", gap: 2 }, platformIcon: null, platformIconSmall: null, infoNotice: null, infoText: null, divider: null };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm };
obj2.platformIcon = size;
const size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj2.platformIconSmall = size1;
let obj3 = { flexDirection: "row", alignItems: "center", gap: 12, padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.md };
obj2.infoNotice = { flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, borderWidth: 1, borderRadius: nativeDefault.radii.sm };
obj2.infoText = { flex: 1 };
let obj4 = { flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, borderWidth: 1, borderRadius: nativeDefault.radii.sm };
obj2.divider = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 8 };
let closure_10 = createStyles.createStyles(obj2);
fn(558);
let obj5 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 8 };
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectAccountStep(clientId) {
  const cResult = clientId(576).c(69);
  clientId = clientId.clientId;
  const platformType = clientId.platformType;
  const tmp4 = closure_10();
  const tmp6 = platformType(4991)();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[0] = items;
    let first = items;
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
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const obj = clientId(576);
  const stateFromStores = clientId(504).useStateFromStores(first, tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AuthenticationStore, UserStore];
    class E {
      constructor() {
        currentUser = null;
        if (null != closure_1_6.getId()) {
          tmp2 = closure_1_7;
          currentUser = closure_1_7.getCurrentUser();
        }
        return currentUser;
      }
    }
    cResult[4] = items2;
    cResult[5] = E;
    let tmp13 = E;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult = clientId(504);
  const stateFromStores1 = clientId(504).useStateFromStores(tmp12, tmp13);
  if (cResult[6] === platformType) {
    if (cResult[9] !== stateFromStores) {
      let applicationIconSource;
      if (null != stateFromStores) {
        ({ id: obj8.id, icon: obj8.icon } = stateFromStores);
        applicationIconSource = tmp5(1414).getApplicationIconSource({ id: null, icon: null });
        const obj2 = { id: null, icon: null };
        const tmp5Result = tmp5(1414);
      }
      cResult[9] = stateFromStores;
      class E {
        constructor() {
          currentUser = null;
          if (null != closure_1_6.getId()) {
            tmp2 = closure_1_7;
            currentUser = closure_1_7.getCurrentUser();
          }
          return currentUser;
        }
      }
      cResult[10] = applicationIconSource;
      let tmp20 = applicationIconSource;
    } else {
      tmp20 = cResult[10];
    }
    if (cResult[11] !== stateFromStores1) {
      let userAvatarSource;
      if (null != stateFromStores1) {
        userAvatarSource = tmp5(1414).getUserAvatarSource(stateFromStores1);
        const tmp5Result3 = tmp5(1414);
      }
      cResult[11] = stateFromStores1;
      class E {
        constructor() {
          currentUser = null;
          if (null != closure_1_6.getId()) {
            tmp2 = closure_1_7;
            currentUser = closure_1_7.getCurrentUser();
          }
          return currentUser;
        }
      }
      cResult[12] = userAvatarSource;
      let tmp23 = userAvatarSource;
    } else {
      tmp23 = cResult[12];
    }
    let str;
    class E {
      constructor() {
        currentUser = null;
        if (null != closure_1_6.getId()) {
          tmp2 = closure_1_7;
          currentUser = closure_1_7.getCurrentUser();
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
          obj = closure_1(closure_2[15]);
          application = obj.fetchApplication(clientId);
          return;
        }
      }
      const items3 = [clientId];
      cResult[13] = clientId;
      class E {
        constructor() {
          currentUser = null;
          if (null != closure_1_6.getId()) {
            tmp2 = closure_1_7;
            currentUser = closure_1_7.getCurrentUser();
          }
          return currentUser;
        }
      }
      cResult[14] = items3;
      cResult[15] = G;
      let tmp28 = G;
      const tmp27 = items3;
    } else {
      class G {
        constructor() {
          obj = closure_1(closure_2[15]);
          application = obj.fetchApplication(clientId);
          return;
        }
      }
      tmp28 = cResult[15];
    }
    const effect = noop.useEffect(tmp28, tmp27);
    if (cResult[16] !== platformType) {
      class G {
        constructor() {
          obj = closure_1(closure_2[15]);
          application = obj.fetchApplication(clientId);
          return;
        }
      }
      cResult[16] = platformType;
      cResult[17] = tmp31;
      class E {
        constructor() {
          currentUser = null;
          if (null != closure_1_6.getId()) {
            tmp2 = closure_1_7;
            currentUser = closure_1_7.getCurrentUser();
          }
          return currentUser;
        }
      }
    } else {
      class G {
        constructor() {
          obj = closure_1(closure_2[15]);
          application = obj.fetchApplication(clientId);
          return;
        }
      }
    }
    const container = tmp4.container;
    if (cResult[18] !== tmp20) {
      class G {
        constructor() {
          obj = closure_1(closure_2[15]);
          application = obj.fetchApplication(clientId);
          return;
        }
      }
      const obj3 = { source: tmp20, size: null };
      const Avatar = tmp(1200).Avatar;
      obj3.size = tmp(1200).AvatarSizes.XLARGE;
      class E {
        constructor() {
          currentUser = null;
          if (null != closure_1_6.getId()) {
            tmp2 = closure_1_7;
            currentUser = closure_1_7.getCurrentUser();
          }
          return currentUser;
        }
      }
      cResult[18] = tmp20;
      cResult[19] = tmp33;
    } else {
      class G {
        constructor() {
          obj = closure_1(closure_2[15]);
          application = obj.fetchApplication(clientId);
          return;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor() {
          obj = closure_1(closure_2[15]);
          application = obj.fetchApplication(clientId);
          return;
        }
      }
      const obj4 = { color: tmp5(587).colors.INTERACTIVE_TEXT_DEFAULT, size: "md" };
      const tmp35 = closure_8(tmp(9180).MoreHorizontalIcon, obj4);
      class E {
        constructor() {
          currentUser = null;
          if (null != closure_1_6.getId()) {
            tmp2 = closure_1_7;
            currentUser = closure_1_7.getCurrentUser();
          }
          return currentUser;
        }
      }
      cResult[20] = tmp35;
      const tmp34 = tmp35;
    } else {
      class G {
        constructor() {
          obj = closure_1(closure_2[15]);
          application = obj.fetchApplication(clientId);
          return;
        }
      }
    }
    if (cResult[21] !== tmp23) {
      class G {
        constructor() {
          obj = closure_1(closure_2[15]);
          application = obj.fetchApplication(clientId);
          return;
        }
      }
      const obj6 = { source: tmp23, size: null };
      const Avatar2 = tmp(1200).Avatar;
      obj6.size = tmp(1200).AvatarSizes.XLARGE;
      class E {
        constructor() {
          currentUser = null;
          if (null != closure_1_6.getId()) {
            tmp2 = closure_1_7;
            currentUser = closure_1_7.getCurrentUser();
          }
          return currentUser;
        }
      }
      cResult[21] = tmp23;
      cResult[22] = tmp37;
    } else {
      class G {
        constructor() {
          obj = closure_1(closure_2[15]);
          application = obj.fetchApplication(clientId);
          return;
        }
      }
    }
    if (cResult[23] === tmp4.headerIcons) {
      class G {
        constructor() {
          obj = closure_1(closure_2[15]);
          application = obj.fetchApplication(clientId);
          return;
        }
      }
    }
    const obj7 = { style: tmp4.headerIcons, children: null };
    const items4 = [tmp33, tmp34, tmp37];
    obj7.children = items4;
    const tmp41 = closure_9(View, obj7);
    cResult[23] = tmp4.headerIcons;
    cResult[24] = tmp33;
    cResult[25] = tmp37;
    cResult[26] = tmp41;
  }
  const tmpResult3 = clientId(504);
  value = platformType(5759).get(platformType);
  if (null == value) {
    class G {
      constructor() {
        obj = closure_1(closure_2[15]);
        application = obj.fetchApplication(clientId);
        return;
      }
    }
    cResult[6] = platformType;
    cResult[7] = tmp6;
    class E {
      constructor() {
        currentUser = null;
        if (null != closure_1_6.getId()) {
          tmp2 = closure_1_7;
          currentUser = closure_1_7.getCurrentUser();
        }
        return currentUser;
      }
    }
  } else {
    class G {
      constructor() {
        obj = closure_1(closure_2[15]);
        application = obj.fetchApplication(clientId);
        return;
      }
    }
    const icon = value.icon;
    const source = obj5.makeSource(tmp(4929).isThemeLight(tmp6) ? icon.lightPNG : icon.darkPNG);
    const tmpResult4 = tmp(4929);
  }
  const tmp5Result4 = platformType(5759);
}) : (function ConnectAccountStep(clientId) {
  clientId = clientId.clientId;
  const platformType = clientId.platformType;
  const platformName = clientId.platformName;
  const tmp = closure_10();
  const tmp4 = platformType(4991)();
  const items = [ApplicationStore];
  const items1 = [clientId];
  const stateFromStores = clientId(504).useStateFromStores(items, () => ApplicationStore.getApplication(clientId), items1);
  const obj = clientId(504);
  const items2 = [AuthenticationStore, UserStore];
  const stateFromStores1 = clientId(504).useStateFromStores(items2, () => {
    currentUser = null;
    if (null != id.getId()) {
      currentUser = currentUser.getCurrentUser();
    }
    return currentUser;
  });
  const obj2 = clientId(504);
  value = platformType(5759).get(platformType);
  if (null == value) {
    let applicationIconSource;
    if (null != stateFromStores) {
      ({ id: obj7.id, icon: obj7.icon } = stateFromStores);
      applicationIconSource = tmp2(1414).getApplicationIconSource({ id: null, icon: null });
      const obj4 = { id: null, icon: null };
      const tmp2Result = tmp2(1414);
    }
    let userAvatarSource;
    if (null != stateFromStores1) {
      userAvatarSource = tmp2(1414).getUserAvatarSource(stateFromStores1);
      const tmp2Result2 = tmp2(1414);
    }
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.name;
    }
    if (str == null) {
      str = "";
    }
    const items3 = [clientId];
    const effect = noop.useEffect(() => {
      const application = ApplicationActionCreatorsDefault.fetchApplication(clientId);
    }, items3);
    const obj5 = { style: tmp.container, children: null };
    const obj6 = { style: tmp.header, children: null };
    const obj8 = { style: tmp.headerIcons, children: null };
    const obj9 = { source: applicationIconSource, size: tmp5(1200).AvatarSizes.XLARGE };
    const items4 = [closure_8(tmp5(1200).Avatar, obj9), , ];
    const obj10 = { color: tmp2(587).colors.INTERACTIVE_TEXT_DEFAULT, size: "md" };
    items4[1] = closure_8(tmp5(9180).MoreHorizontalIcon, obj10);
    const obj11 = { source: userAvatarSource, size: tmp5(1200).AvatarSizes.XLARGE };
    items4[2] = closure_8(tmp5(1200).Avatar, obj11);
    obj8.children = items4;
    const items5 = [closure_9(View, obj8), , ];
    const obj12 = { variant: "text-lg/normal", color: "text-default", children: null };
    const intl = tmp5(1126).intl;
    obj12.children = intl.string(tmp5(1126).t.uT1CPa);
    items5[1] = closure_8(tmp5(5086).Text, obj12);
    const obj13 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: str };
    items5[2] = closure_8(tmp5(5086).Text, obj13);
    obj6.children = items5;
    const items6 = [closure_9(View, obj6), , , ];
    const obj14 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl2 = tmp5(1126).intl;
    const obj15 = { applicationName: str, platformName };
    obj14.children = intl2.format(tmp5(1126).t["aJRE/Q"], obj15);
    items6[1] = closure_8(tmp5(5086).Text, obj14);
    const obj16 = { style: tmp.card, children: null };
    let tmp16Result = null;
    if (null != null) {
      const obj17 = { source: null, style: tmp.platformIcon, disableColor: true };
      tmp16Result = closure_8(tmp5(1200).Icon, obj17);
    }
    const items7 = [tmp16Result, , ];
    const obj18 = { variant: "text-md/medium", style: tmp.cardName, color: "text-default", children: platformName };
    items7[1] = closure_8(tmp5(5086).Text, obj18);
    const obj19 = {
      variant: "primary",
      size: "sm",
      onPress: function handleConnect() {
          authorizeConnectionDefault({ platformType, location: "OAuth2 Connect Account Step" });
        },
      text: null
    };
    const intl3 = tmp5(1126).intl;
    obj19.text = intl3.string(tmp5(1126).t.S0W8Z5);
    items7[2] = closure_8(tmp5(5375).Button, obj19);
    obj16.children = items7;
    items6[2] = closure_9(View, obj16);
    const obj20 = { style: tmp.infoNotice, children: null };
    const obj21 = { color: tmp2(587).colors.ICON_FEEDBACK_INFO, size: "sm" };
    const items8 = [closure_8(tmp5(5012).CircleInformationIcon, obj21), ];
    const obj22 = { variant: "text-sm/normal", color: "text-default", style: tmp.infoText, children: null };
    const intl4 = tmp5(1126).intl;
    const obj23 = { platformName, applicationName: str };
    obj22.children = intl4.format(tmp5(1126).t["8psEFX"], obj23);
    items8[1] = closure_8(tmp5(5086).Text, obj22);
    obj20.children = items8;
    items6[3] = closure_9(View, obj20);
    obj5.children = items6;
    return closure_9(View, obj5);
  } else {
    const tmp5Result = tmp5(1414);
    const icon = value.icon;
    const source = tmp5Result.makeSource(tmp5(4929).isThemeLight(tmp4) ? icon.lightPNG : icon.darkPNG);
    const tmp5Result2 = tmp5(4929);
  }
  const obj3 = platformType(5759);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ConnectAccountStep.tsx");

export default tmp3;
export const ConnectedAccountCard = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedAccountCard(arg0) {
  const cResult = c.c(38);
  ({ platformType, platformName, connectedAccount, applicationName } = arg0);
  const tmp4 = closure_10();
  const tmp6 = useThemeDefault();
  if (cResult[0] === platformType) {
    if (cResult[1] === tmp6) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] !== platformName) {
      const intl = util.intl;
      const obj2 = { platformName };
      const formatResult = intl.format(util.t["+oaRw3"], obj2);
      cResult[3] = platformName;
      cResult[4] = formatResult;
      let tmp10 = formatResult;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] !== tmp10) {
      const obj3 = { variant: "text-sm/normal", color: "text-default", children: tmp10 };
      const tmp14 = closure_1_8(Text_Text.Text, obj3);
      cResult[5] = tmp10;
      cResult[6] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] === tmp7) {
      if (cResult[8] === tmp4.platformIconSmall) {
        let tmp16 = cResult[9];
      }
      if (cResult[10] !== connectedAccount.name) {
        const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: connectedAccount.name };
        const tmp21 = closure_1_8(Text_Text.Text, obj4);
        cResult[10] = connectedAccount.name;
        cResult[11] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[11];
      }
      if (cResult[12] === connectedAccount.id) {
        if (cResult[13] === platformName) {
          let tmp22 = cResult[14];
        }
        if (cResult[15] !== tmp22) {
          const obj5 = { variant: "text-xs/normal", color: "text-muted", children: tmp22 };
          const tmp26 = closure_1_8(Text_Text.Text, obj5);
          cResult[15] = tmp22;
          cResult[16] = tmp26;
          let tmp24 = tmp26;
        } else {
          tmp24 = cResult[16];
        }
        if (cResult[17] === tmp4.cardInfo) {
          if (cResult[18] === tmp24) {
            if (cResult[19] === tmp19) {
              let tmp27 = cResult[20];
            }
            const _Symbol = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              const obj6 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, size: "sm" };
              const tmp34 = closure_1_8(CheckmarkLargeIcon.CheckmarkLargeIcon, obj6);
              cResult[21] = tmp34;
              let tmp32 = tmp34;
            } else {
              tmp32 = cResult[21];
            }
            if (cResult[22] === tmp4.card) {
              if (cResult[23] === tmp27) {
                if (cResult[24] === tmp16) {
                  let tmp35 = cResult[25];
                }
                if (cResult[26] !== applicationName) {
                  const intl3 = util.intl;
                  const obj7 = { applicationName };
                  const formatResult1 = intl3.format(util.t.pyRNXJ, obj7);
                  cResult[26] = applicationName;
                  cResult[27] = formatResult1;
                  let tmp39 = formatResult1;
                } else {
                  tmp39 = cResult[27];
                }
                if (cResult[28] !== tmp39) {
                  const obj8 = { variant: "text-sm/normal", color: "text-default", children: tmp39 };
                  const tmp43 = closure_1_8(Text_Text.Text, obj8);
                  cResult[28] = tmp39;
                  cResult[29] = tmp43;
                  let tmp41 = tmp43;
                } else {
                  tmp41 = cResult[29];
                }
                if (cResult[30] !== tmp4.divider) {
                  const obj9 = { style: tmp4.divider };
                  const tmp47 = closure_1_8(View, obj9);
                  cResult[30] = tmp4.divider;
                  cResult[31] = tmp47;
                  let tmp44 = tmp47;
                } else {
                  tmp44 = cResult[31];
                }
                if (cResult[32] === tmp4.container) {
                  if (cResult[33] === tmp35) {
                    if (cResult[34] === tmp41) {
                      if (cResult[35] === tmp44) {
                        if (cResult[36] === tmp12) {
                          let tmp48 = cResult[37];
                        }
                        return tmp48;
                      }
                    }
                  }
                }
                const obj10 = { style: tmp4.container, children: null };
                const items = [tmp12, tmp35, tmp41, tmp44];
                obj10.children = items;
                const tmp51 = options(View, obj10);
                cResult[32] = tmp4.container;
                cResult[33] = tmp35;
                cResult[34] = tmp41;
                cResult[35] = tmp44;
                cResult[36] = tmp12;
                cResult[37] = tmp51;
                tmp48 = tmp51;
              }
            }
            const obj11 = { style: tmp15, children: null };
            const items1 = [tmp16, tmp27, tmp32];
            obj11.children = items1;
            const tmp38 = options(View, obj11);
            cResult[22] = tmp4.card;
            cResult[23] = tmp27;
            cResult[24] = tmp16;
            cResult[25] = tmp38;
            tmp35 = tmp38;
          }
        }
        const obj12 = { style: tmp4.cardInfo, children: null };
        const items2 = [tmp19, tmp24];
        obj12.children = items2;
        const tmp30 = options(View, obj12);
        cResult[17] = tmp4.cardInfo;
        cResult[18] = tmp24;
        cResult[19] = tmp19;
        cResult[20] = tmp30;
        tmp27 = tmp30;
      }
      const intl2 = util.intl;
      const obj13 = { platformName, connectedAccountId: connectedAccount.id };
      const formatResult2 = intl2.format(util.t.Dkd7sE, obj13);
      cResult[12] = connectedAccount.id;
      cResult[13] = platformName;
      cResult[14] = formatResult2;
      tmp22 = formatResult2;
    }
    let tmp17 = null;
    if (null != tmp7) {
      const obj14 = { source: tmp7, style: tmp4.platformIconSmall, disableColor: true };
      tmp17 = closure_1_8(native.Icon, obj14);
    }
    cResult[7] = tmp7;
    cResult[8] = tmp4.platformIconSmall;
    cResult[9] = tmp17;
    tmp16 = tmp17;
  }
  value = PlatformsDefault.get(platformType);
  if (null == value) {
    cResult[0] = platformType;
    cResult[1] = tmp6;
    cResult[2] = null;
    tmp7 = null;
  } else {
    const tmpResult = AvatarUtils;
    const icon = value.icon;
    const source = tmpResult.makeSource(shared.isThemeLight(tmp6) ? icon.lightPNG : icon.darkPNG);
    const tmpResult2 = shared;
  }
  const tmp5Result = PlatformsDefault;
}) : (function ConnectedAccountCard(arg0) {
  ({ platformName, connectedAccount } = arg0);
  ({ platformType, applicationName } = arg0);
  const tmp = closure_10();
  const tmp4 = useThemeDefault();
  value = PlatformsDefault.get(platformType);
  if (null == value) {
    const obj4 = { style: tmp.container, children: null };
    const obj5 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl = util.intl;
    const obj6 = { platformName };
    obj5.children = intl.format(util.t["+oaRw3"], obj6);
    const items = [closure_1_8(Text_Text.Text, obj5), , , ];
    const obj7 = { style: tmp.card, children: null };
    let tmp10Result = null;
    if (null != null) {
      const obj8 = { source: null, style: tmp.platformIconSmall, disableColor: true };
      tmp10Result = closure_1_8(native.Icon, obj8);
    }
    const items1 = [tmp10Result, , ];
    const obj9 = { style: tmp.cardInfo, children: null };
    const obj10 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: connectedAccount.name };
    const items2 = [closure_1_8(Text_Text.Text, obj10), ];
    const obj11 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl2 = util.intl;
    const obj12 = { platformName, connectedAccountId: connectedAccount.id };
    obj11.children = intl2.format(util.t.Dkd7sE, obj12);
    items2[1] = closure_1_8(Text_Text.Text, obj11);
    obj9.children = items2;
    items1[1] = options(View, obj9);
    const obj13 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, size: "sm" };
    items1[2] = closure_1_8(CheckmarkLargeIcon.CheckmarkLargeIcon, obj13);
    obj7.children = items1;
    items[1] = options(View, obj7);
    const obj14 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl3 = util.intl;
    const obj15 = { applicationName };
    obj14.children = intl3.format(util.t.pyRNXJ, obj15);
    items[2] = closure_1_8(Text_Text.Text, obj14);
    const obj16 = { style: tmp.divider };
    items[3] = closure_1_8(View, obj16);
    obj4.children = items;
    return options(View, obj4);
  } else {
    const obj2 = AvatarUtils;
    const icon = value.icon;
    const source = obj2.makeSource(shared.isThemeLight(tmp4) ? icon.lightPNG : icon.darkPNG);
  }
});