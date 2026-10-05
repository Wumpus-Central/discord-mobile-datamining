// === Module 14771: ConnectedAccount ===

// Module 14771 (ConnectedAccount)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import _modDef3141 from "module_3141" /* 3141 */;
import native2 from "native" /* 4589 */;
import shared from "shared" /* 4729 */;
import Text_Text from "Text/Text" /* 4886 */;
import PlatformsDefault from "Platforms" /* 5442 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import AlertDefault from "Alert" /* 5783 */;
import GuildIconDefault from "GuildIcon" /* 5971 */;
import TableRowDivider from "TableRowDivider" /* 5988 */;
import TableRow from "TableRow" /* 5993 */;
import react2 from "react" /* 5994 */;
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 6677 */;
import Constants2 from "Constants" /* 6679 */;
import TableSwitchRow2 from "TableSwitchRow" /* 6698 */;
import IconButton2 from "IconButton" /* 7575 */;
import XLargeBoldIcon from "XLargeBoldIcon" /* 9385 */;
import InfoBoxDefault from "InfoBox" /* 9459 */;
import shouldWarnConnectedAccountTwoWayDefault from "shouldWarnConnectedAccountTwoWay" /* 14772 */;
import XboxTwoWayLinkUpsell from "XboxTwoWayLinkUpsell" /* 14773 */;
import PlayStationTwoWayLinkUpsell from "PlayStationTwoWayLinkUpsell" /* 14776 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import GuildStore from "GuildStore" /* 2074 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import native_mod from "native" /* 1188 */;
import TextStyles from "TextStyles" /* 5915 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_1, closure_2, importDefault, integration, integrations;

let Fonts;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let native;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
function RowGroup(children) {
  let c0 = false;
  const Children = react.Children;
  return Children.map(children.children, (arg0) => {
    let items;
    let tmp = null;
    if (null != arg0) {
      let tmp3;
      const tmp2 = c0;
      if (tmp2) {
        const obj = { children: items };
        items = [authStore2(TableRowDivider.TableRowDivider, {}), arg0];
        tmp3 = closure_15(authStore3, obj);
      } else {
        c0 = true;
        tmp3 = arg0;
      }
      tmp = tmp3;
    }
    return tmp;
  });
}
const View = react_native.View;
({ FRIEND_SYNC_PLATFORM_TYPES: c9, ACTIVITY_PLATFORM_TYPES: c10, PlatformTypes: unpackModuleId, HelpdeskArticles: closure_12, Fonts } = Constants);
const MetadataFields = Constants2.MetadataFields;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let obj = { platformIcon: { marginRight: 4 }, connectedApplicationIdentityIcon: obj2, container: { marginHorizontal: 8, marginVertical: 4 }, connectedAccountItem: obj3, connectedAccountHeader: obj4, connectedAccountSection: obj5, integrationsSection: { paddingHorizontal: 12, paddingBottom: 12, gap: 0 }, integrationContainer: obj6, integrationContainerInternal: { alignItems: "center", flexDirection: "row" }, integrationTextRowContainer: { alignItems: "flex-start", flexDirection: "column", flex: 1 }, integrationErrorText: { alignItems: "center", marginTop: 4, marginBottom: 8 }, integrationCategoryLabel: { marginVertical: 0 }, integrationGuildIcon: { margin: 8 }, integrationJoinButton: { alignSelf: "center", marginEnd: 8, marginStart: 8 }, alertInfoBox: { marginTop: 8 }, alertBodyText: obj7, metadataContainer: obj8, metadataItemsContainer: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", alignContent: "flex-start", padding: 8, flexShrink: 1 }, refreshButtonContainer: { marginRight: 4 }, metadataBannerContainer: { justifyContent: "center", flexWrap: "wrap", alignItems: "center", paddingHorizontal: 16, paddingVertical: 14 }, newBadge: { marginRight: 4 }, rowDivider: { flexBasis: "100%", height: 12 }, addDetailsButton: { paddingHorizontal: 16, flexGrow: 0, marginRight: 12 }, learnMoreButton: { paddingHorizontal: 16, flexGrow: 0 }, relinkButton: obj9, relinkText: { marginTop: 8 } };
obj2 = { borderRadius: native.getIconSize(native.Icon.Sizes.LARGE), marginRight: 4 };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
native = native_mod;
obj3 = { borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden" };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
obj5 = { backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT, paddingTop: 8, gap: 8 };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, marginTop: 12, paddingVertical: 4, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, flexDirection: "column", alignItems: "center" };
obj7 = { marginTop: 16 };
let merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 16));
obj8 = { display: "flex", flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, marginHorizontal: 16, alignItems: "center", justifyContent: "space-between" };
obj9 = { paddingVertical: 8, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round };
let legacyClassComponentStyles = createLegacyClassComponentStyles(obj);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((integration) => {
  let Button;
  let first;
  let intl2;
  let items4;
  let items5;
  let items6;
  let obj12;
  let stringResult;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp6;
  let tmp9;
  let obj = integration(576);
  const cResult = obj.c(40);
  integration = integration.integration;
  const obj2 = integration(4890);
  legacyClassComponentStyles = obj2.useLegacyClassComponentStyles(legacyClassComponentStyles);
  [tmp6, importDefault] = react.useState();
  _slicedToArray(react.useState(), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConnectedAccountsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== integration.id) {
    const fn = function h() {
      return ConnectedAccountsStore.isJoining(integration.id);
    };
    const items1 = [integration.id];
    cResult[1] = integration.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = integration(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildStore];
    cResult[4] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== integration.guild.id) {
    const fn2 = function w() {
      return GuildStore.getGuild(integration.guild.id);
    };
    const items3 = [integration.guild.id];
    cResult[5] = integration.guild.id;
    cResult[6] = fn2;
    cResult[7] = items3;
    tmp15 = items3;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[6];
    tmp15 = cResult[7];
  }
  const tmpResult2 = integration(504);
  const tmp16 = null != tmpResult2.useStateFromStores(tmp12, tmp14, tmp15);
  if (cResult[8] === integration.id) {
    if (cResult[9] === stateFromStores) {
      if (cResult[10] === tmp16) {
        let tmp17;
        if (cResult[11] === legacyClassComponentStyles.integrationJoinButton) {
          tmp17 = cResult[12];
        }
        if (cResult[13] === tmp6) {
          if (cResult[14] === integration.id) {
            let tmp22;
            if (cResult[15] === legacyClassComponentStyles.integrationErrorText) {
              tmp22 = cResult[16];
            }
            if (cResult[17] === integration.guild) {
              let tmp25;
              let tmp30;
              if (cResult[18] === legacyClassComponentStyles.integrationGuildIcon) {
                tmp25 = cResult[19];
              }
              if (cResult[20] !== integration.guild.name) {
                const obj3 = { lineClamp: 1, variant: "text-sm/medium", children: integration.guild.name };
                const tmp32 = closure_14(integration(4886).Text, obj3);
                cResult[20] = integration.guild.name;
                cResult[21] = tmp32;
                tmp30 = tmp32;
              } else {
                tmp30 = cResult[21];
              }
              if (cResult[22] === integration.account) {
                let tmp33;
                let tmp37;
                if (cResult[23] === integration.type) {
                  tmp33 = cResult[24];
                }
                if (cResult[25] !== tmp33) {
                  const obj4 = { lineClamp: 1, variant: "text-xs/medium", color: "text-muted", children: tmp33 };
                  const tmp39 = closure_14(integration(4886).Text, obj4);
                  cResult[25] = tmp33;
                  cResult[26] = tmp39;
                  tmp37 = tmp39;
                } else {
                  tmp37 = cResult[26];
                }
                if (cResult[27] === legacyClassComponentStyles.integrationTextRowContainer) {
                  if (cResult[28] === tmp30) {
                    let tmp40;
                    if (cResult[29] === tmp37) {
                      tmp40 = cResult[30];
                    }
                    if (cResult[31] === tmp17) {
                      if (cResult[32] === legacyClassComponentStyles.integrationContainerInternal) {
                        if (cResult[33] === tmp40) {
                          let tmp44;
                          if (cResult[34] === tmp25) {
                            tmp44 = cResult[35];
                          }
                          if (cResult[36] === tmp22) {
                            if (cResult[37] === legacyClassComponentStyles.integrationContainer) {
                              let tmp48;
                              if (cResult[38] === tmp44) {
                                tmp48 = cResult[39];
                              }
                              return tmp48;
                            }
                          }
                          const obj5 = { style: legacyClassComponentStyles.integrationContainer, children: items4 };
                          items4 = [tmp44, tmp22];
                          const tmp51 = closure_15(View, obj5);
                          cResult[36] = tmp22;
                          cResult[37] = legacyClassComponentStyles.integrationContainer;
                          cResult[38] = tmp44;
                          cResult[39] = tmp51;
                          tmp48 = tmp51;
                        }
                      }
                    }
                    const obj6 = { style: legacyClassComponentStyles.integrationContainerInternal, children: items5 };
                    items5 = [tmp25, tmp40, tmp17];
                    const tmp47 = closure_15(View, obj6);
                    cResult[31] = tmp17;
                    cResult[32] = legacyClassComponentStyles.integrationContainerInternal;
                    cResult[33] = tmp40;
                    cResult[34] = tmp25;
                    cResult[35] = tmp47;
                    tmp44 = tmp47;
                  }
                }
                const obj7 = { style: legacyClassComponentStyles.integrationTextRowContainer, children: items6 };
                items6 = [tmp30, tmp37];
                const tmp43 = closure_15(View, obj7);
                cResult[27] = legacyClassComponentStyles.integrationTextRowContainer;
                cResult[28] = tmp30;
                cResult[29] = tmp37;
                cResult[30] = tmp43;
                tmp40 = tmp43;
              }
              const obj10 = PlatformsDefault;
              const value = obj10.get(integration.type);
              let platformUserUrl;
              if (value != null) {
                const getPlatformUserUrl = value.getPlatformUserUrl;
                if (getPlatformUserUrl != null) {
                  platformUserUrl = getPlatformUserUrl(integration.account);
                }
              }
              cResult[22] = integration.account;
              cResult[23] = integration.type;
              cResult[24] = platformUserUrl;
              tmp33 = platformUserUrl;
            }
            const obj8 = { guild: integration.guild, size: integration(5971).GuildIconSizes.SMALL, style: legacyClassComponentStyles.integrationGuildIcon };
            const tmp28 = GuildIconDefault;
            const tmp29 = closure_14(tmp28, obj8);
            cResult[17] = integration.guild;
            cResult[18] = legacyClassComponentStyles.integrationGuildIcon;
            cResult[19] = tmp29;
            tmp25 = tmp29;
          }
        }
        let tmp23 = tmp6 === integration.id;
        if (tmp23) {
          const obj9 = { style: legacyClassComponentStyles.integrationErrorText, variant: "text-sm/medium", color: "text-feedback-critical", children: intl2.string(integration(1126).t.fEptJP) };
          const Text = tmp(4886).Text;
          intl2 = tmp(1126).intl;
          tmp23 = closure_14(Text, obj9);
        }
        cResult[13] = tmp6;
        cResult[14] = integration.id;
        cResult[15] = legacyClassComponentStyles.integrationErrorText;
        cResult[16] = tmp23;
        tmp22 = tmp23;
      }
    }
  }
  let tmp19Result = !tmp16;
  if (tmp19Result) {
    const obj11 = { style: legacyClassComponentStyles.integrationJoinButton, children: closure_14(Button, obj12) };
    obj12 = {
      size: "sm",
      variant: "secondary",
      onPress() {
          const id = integration.id;
          const obj = ConnectedAccountsActionCreatorsDefault;
          obj.joinServer(id, () => {
            closure_1_1(id.id);
          });
        },
      disabled: stateFromStores,
      text: stringResult
    };
    Button = tmp(5594).Button;
    const intl = tmp(1126).intl;
    const string = intl.string;
    const t = tmp(1126).t;
    if (stateFromStores) {
      stringResult = string(t.RXvQQu);
    } else {
      stringResult = string(t.XpeFYr);
    }
    tmp19Result = closure_14(View, obj11);
  }
  cResult[8] = integration.id;
  cResult[9] = stateFromStores;
  cResult[10] = tmp16;
  cResult[11] = legacyClassComponentStyles.integrationJoinButton;
  cResult[12] = tmp19Result;
  tmp17 = tmp19Result;
}) : ((integration) => {
  let Button;
  let c1;
  let intl2;
  let items4;
  let items5;
  let items6;
  let obj5;
  let stringResult;
  let tmp5;
  integration = integration.integration;
  importDefault = undefined;
  let obj = integration(4890);
  legacyClassComponentStyles = obj.useLegacyClassComponentStyles(legacyClassComponentStyles);
  [tmp5, c1] = react.useState();
  _slicedToArray(react.useState(), 2);
  const items = [ConnectedAccountsStore];
  const items1 = [integration.id];
  const obj2 = integration(504);
  const stateFromStores = obj2.useStateFromStores(items, () => ConnectedAccountsStore.isJoining(integration.id), items1);
  const items2 = [GuildStore];
  const items3 = [integration.guild.id];
  const obj3 = integration(504);
  let tmp8Result = null == obj3.useStateFromStores(items2, () => GuildStore.getGuild(integration.guild.id), items3);
  if (tmp8Result) {
    const obj4 = { style: legacyClassComponentStyles.integrationJoinButton, children: closure_14(Button, obj5) };
    obj5 = {
      size: "sm",
      variant: "secondary",
      onPress() {
          const id = integration.id;
          const obj = ConnectedAccountsActionCreatorsDefault;
          obj.joinServer(id, () => {
            closure_1_1(id.id);
          });
        },
      disabled: stateFromStores,
      text: stringResult
    };
    Button = tmp(5594).Button;
    const intl = tmp(1126).intl;
    const string = intl.string;
    const t = tmp(1126).t;
    if (stateFromStores) {
      stringResult = string(t.RXvQQu);
    } else {
      stringResult = string(t.XpeFYr);
    }
    tmp8Result = closure_14(View, obj4);
  }
  let tmp11 = tmp5 === integration.id;
  if (tmp11) {
    const obj6 = { style: legacyClassComponentStyles.integrationErrorText, variant: "text-sm/medium", color: "text-feedback-critical", children: intl2.string(integration(1126).t.fEptJP) };
    const Text = tmp(4886).Text;
    intl2 = tmp(1126).intl;
    tmp11 = closure_14(Text, obj6);
  }
  const obj7 = { style: legacyClassComponentStyles.integrationContainer, children: items6 };
  const obj8 = { style: legacyClassComponentStyles.integrationContainerInternal, children: items4 };
  const obj9 = { guild: integration.guild, size: integration(5971).GuildIconSizes.SMALL, style: legacyClassComponentStyles.integrationGuildIcon };
  const tmp16 = GuildIconDefault;
  items4 = [closure_14(tmp16, obj9), , ];
  const obj10 = { style: legacyClassComponentStyles.integrationTextRowContainer, children: items5 };
  items5 = [, ];
  const obj11 = { lineClamp: 1, variant: "text-sm/medium", children: integration.guild.name };
  items5[0] = closure_14(integration(4886).Text, obj11);
  const Text2 = tmp(4886).Text;
  const obj12 = PlatformsDefault;
  const value = obj12.get(integration.type);
  let platformUserUrl;
  if (value != null) {
    const getPlatformUserUrl = value.getPlatformUserUrl;
    if (getPlatformUserUrl != null) {
      platformUserUrl = getPlatformUserUrl(integration.account);
    }
  }
  items5[1] = closure_14(Text2, { lineClamp: 1, variant: "text-xs/medium", color: "text-muted", children: platformUserUrl });
  items4[1] = closure_15(View, obj10);
  items4[2] = tmp8Result;
  items6 = [closure_15(View, obj8), tmp11];
  return closure_15(View, obj7);
});
const PureComponent = react.PureComponent;
class ConnectedAccount extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    let obj = { isVisible: 1 === applyArgumentsResult.props.account.visibility, isMetadataVisible: 1 === applyArgumentsResult.props.account.metadataVisibility, inProgressVisibility: null, inProgressMetadataVisibility: null, showActivity: applyArgumentsResult.props.account.showActivity, friendSync: applyArgumentsResult.props.account.friendSync, metadataRefreshing: false, metadataAlreadyRefreshed: false };
    applyArgumentsResult.state = obj;
    applyArgumentsResult.handleDisconnect = function handleDisconnect() {
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let items;
      let obj6;
      let obj8;
      const tmp2 = legacyClassComponentStyles(require.context);
      const account = require.props.account;
      const obj = PlatformsDefault;
      const value = obj.get(account.type);
      const intl = intl7.intl;
      const obj2 = { provider: value.name };
      const formatResult = intl.format(intl7.t.VgqIPj, obj2);
      let tmp8;
      if (shouldWarnConnectedAccountTwoWayDefault(account)) {
        const obj3 = { children: items };
        const obj4 = { style: tmp2.alertBodyText, variant: "text-md/medium", children: formatResult };
        items = [authStore2(Text_Text.Text, obj4), ];
        const obj5 = { style: tmp2.alertInfoBox, children: intl2.format(intl7.t.COW3Xn, obj6) };
        const tmp3Result = InfoBoxDefault;
        intl2 = intl7.intl;
        obj6 = { platformName: value.name };
        items[1] = authStore2(tmp3Result, obj5);
        tmp8 = closure_15(View, obj3);
      }
      const obj7 = { title: intl3.formatToPlainString(intl7.t.U5x12f, obj8), body: formatResult, cancelText: intl4.string(intl7.t["ETE/oC"]), children: tmp8, confirmText: intl5.string(intl7.t.ppppRJ), onConfirm: require.handleConfirmDisconnectAccount, confirmColor: AlertDefault.Colors.RED };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl3 = intl7.intl;
      obj8 = { name: value.name };
      intl4 = intl7.intl;
      intl5 = intl7.intl;
      show(obj7);
    };
    applyArgumentsResult.handleConfirmDisconnectAccount = function handleConfirmDisconnectAccount() {
      const account = require.props.account;
      const obj = ConnectedAccountsActionCreatorsDefault;
      obj.disconnect(account.type, account.id);
    };
    _asyncToGenerator(async (isVisible) => {
      let c4 = 0;
      let c5 = 0;
      let c3 = 0;
      return (async (arg0) => {
        let obj7;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                return { value, done: true };
              } else {
                closure_2 = tmp;
                closure_1 = tmp4;
                const account = applyArgumentsResult.props.account;
                let num5 = 0;
                if (isVisible) {
                  num5 = 1;
                }
                if (isVisible) {
                  if (!account.verified) {
                    const obj4 = { inProgressVisibility: num5 };
                    applyArgumentsResult.setState(obj4);
                    const obj5 = { platformType: account.type };
                    closure_1(closure_2[28])(obj5);
                    c5 = 3;
                    return { value: undefined, done: true };
                  }
                }
                const obj8 = { isVisible };
                applyArgumentsResult.setState(obj8);
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj9 = { value: obj7.setVisibility(account.type, account.id, num5), done: false };
                obj7 = closure_1(closure_2[13]);
                return obj9;
              }
            } else {
              if (1 === c4) {
                c3 = 0;
                const obj10 = { isVisible: !isVisible };
                closure_130_1.setState(obj10);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                return { value, done: true };
              } else {
                c3 = 0;
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp19) {
            if (0 === c3) {
              c5 = 3;
              throw tmp19;
            } else {
              c4 = 1;
            }
          }
        }
      })();
    });
    applyArgumentsResult.handleVisibilityChange = function() {
      return closure_0(...arguments);
    };
    _asyncToGenerator(async (isMetadataVisible) => {
      let c4 = 0;
      let c5 = 0;
      let c3 = 0;
      return (async (arg0) => {
        let obj7;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                return { value, done: true };
              } else {
                closure_2 = tmp;
                closure_1 = tmp4;
                const account = applyArgumentsResult.props.account;
                let num5 = 0;
                if (isMetadataVisible) {
                  num5 = 1;
                }
                if (isMetadataVisible) {
                  if (!account.verified) {
                    const obj4 = { inProgressMetadataVisibility: num5 };
                    applyArgumentsResult.setState(obj4);
                    const obj5 = { platformType: account.type };
                    closure_1(closure_2[28])(obj5);
                    c5 = 3;
                    return { value: undefined, done: true };
                  }
                }
                const obj8 = { isMetadataVisible };
                applyArgumentsResult.setState(obj8);
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj9 = { value: obj7.setMetadataVisibility(account.type, account.id, num5), done: false };
                obj7 = closure_1(closure_2[13]);
                return obj9;
              }
            } else {
              if (1 === c4) {
                c3 = 0;
                const obj10 = { isMetadataVisible: !isMetadataVisible };
                closure_130_1.setState(obj10);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                return { value, done: true };
              } else {
                c3 = 0;
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp19) {
            if (0 === c3) {
              c5 = 3;
              throw tmp19;
            } else {
              c4 = 1;
            }
          }
        }
      })();
    });
    applyArgumentsResult.handleMetadataVisibilityChange = function() {
      return closure_0(...arguments);
    };
    _asyncToGenerator(async (friendSync) => {
      let c4 = 0;
      let c5 = 0;
      let c3 = 0;
      return (async (arg0) => {
        let obj7;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                return { value, done: true };
              } else {
                closure_2 = tmp;
                closure_1 = tmp4;
                const account = applyArgumentsResult.props.account;
                const obj4 = { friendSync };
                applyArgumentsResult.setState(obj4);
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: obj7.setFriendSync(account.type, account.id, friendSync), done: false };
                obj7 = closure_1(closure_2[13]);
                return obj5;
              }
            } else {
              if (1 === c4) {
                c3 = 0;
                const obj6 = { friendSync: !friendSync };
                closure_130_1.setState(obj6);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                return { value, done: true };
              } else {
                c3 = 0;
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp10) {
            if (0 === c3) {
              c5 = 3;
              throw tmp10;
            } else {
              c4 = 1;
            }
          }
        }
      })();
    });
    applyArgumentsResult.handleFriendSyncChange = function() {
      return closure_0(...arguments);
    };
    let closure_0 = _asyncToGenerator(async (showActivity) => {
      let c4 = 0;
      let c5 = 0;
      let c3 = 0;
      return (async (arg0) => {
        let obj7;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                return { value, done: true };
              } else {
                closure_2 = tmp;
                closure_1 = tmp4;
                const account = applyArgumentsResult.props.account;
                const obj4 = { showActivity };
                applyArgumentsResult.setState(obj4);
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: obj7.setShowActivity(account.type, account.id, showActivity), done: false };
                obj7 = closure_1(closure_2[13]);
                return obj5;
              }
            } else {
              if (1 === c4) {
                c3 = 0;
                const obj6 = { showActivity: !showActivity };
                closure_130_1.setState(obj6);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                return { value, done: true };
              } else {
                c3 = 0;
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp10) {
            if (0 === c3) {
              c5 = 3;
              throw tmp10;
            } else {
              c4 = 1;
            }
          }
        }
      })();
    });
    applyArgumentsResult.handleShowActivityChange = function() {
      return closure_0(...arguments);
    };
    return applyArgumentsResult;
  }
  componentDidUpdate(account) {
    let inProgressMetadataVisibility;
    let inProgressVisibility;
    const self = this;
    account = this.props.account;
    if (account.account !== account) {
      const obj4 = { isVisible: 1 === account.visibility, isMetadataVisible: 1 === account.metadataVisibility };
      const merged = Object.assign(self.state);
      ({ showActivity: obj3.showActivity, friendSync: obj3.friendSync } = account);
      if (account.verified) {
        ({ inProgressVisibility, inProgressMetadataVisibility } = self.state);
        if (null != inProgressVisibility) {
          obj4.isVisible = 1 === inProgressVisibility;
          obj4.inProgressVisibility = null;
          const obj = ConnectedAccountsActionCreatorsDefault;
          obj.setVisibility(account.type, account.id, inProgressVisibility);
        }
        if (null != inProgressMetadataVisibility) {
          obj4.isMetadataVisible = 1 === inProgressMetadataVisibility;
          obj4.inProgressMetadataVisibility = null;
          const obj2 = ConnectedAccountsActionCreatorsDefault;
          const result = obj2.setMetadataVisibility(account.type, account.id, inProgressMetadataVisibility);
        }
      }
      self.setState(obj4);
    }
  }
  renderUpsell() {
    const account = this.props.account;
    let tmp = null;
    if (!account.twoWayLink) {
      let tmp3;
      if (account.type === unpackModuleId.XBOX) {
        tmp3 = authStore2(XboxTwoWayLinkUpsell.XboxTwoWayLinkUpsell, {});
      } else {
        tmp3 = null;
        if (account.type === tmp2.PLAYSTATION) {
          tmp3 = authStore2(PlayStationTwoWayLinkUpsell.PlayStationTwoWayLinkUpsell, {});
        }
      }
      tmp = tmp3;
    }
    return tmp;
  }
  renderVisibilityCheckRow() {
    let intl;
    const isVisible = this.state.isVisible;
    const obj = { label: intl.string(intl7.t.f7yOAX), value: isVisible, onValueChange: this.handleVisibilityChange };
    const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
    intl = intl7.intl;
    return authStore2(TableSwitchRow, obj);
  }
  renderMetadataVisibilityCheckRow() {
    let intl;
    let isMetadataVisible;
    let isVisible;
    const self = this;
    const account = this.props.account;
    const obj = PlatformsDefault;
    const value = obj.get(account.type);
    let hasMetadata;
    if (value != null) {
      hasMetadata = value.hasMetadata;
    }
    if (true !== hasMetadata) {
      return null;
    } else {
      ({ isMetadataVisible, isVisible } = self.state);
      const obj2 = { label: intl.string(intl7.t.FYKGsL), value: isMetadataVisible, disabled: !isVisible, onValueChange: self.handleMetadataVisibilityChange };
      const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      intl = intl7.intl;
      return authStore2(TableSwitchRow, obj2);
    }
  }
  renderMetadata() {
    let Button;
    let Button2;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let items;
    let items1;
    let items2;
    let obj11;
    let obj3;
    let obj9;
    let redditMetadataItems;
    const self = this;
    const tmp = legacyClassComponentStyles(this.context);
    const props = this.props;
    const account = props.account;
    let metadata = account.metadata;
    const locale = props.locale;
    if (metadata == null) {
      metadata = {};
    }
    const obj2 = account(6678);
    const createdAtDate = obj2.getCreatedAtDate(metadata[MetadataFields.CREATED_AT], locale);
    const type = account.type;
    if (constants.REDDIT === type) {
      const tmp2Result = account(11192);
      redditMetadataItems = tmp2Result.generateRedditMetadataItems(metadata);
    } else if (constants.STEAM === type) {
      const tmp2Result6 = account(11192);
      redditMetadataItems = tmp2Result6.generateSteamMetadataItems(metadata);
    } else {
      if (constants.BLUESKY !== type) {
        if (constants.TWITTER !== type) {
          if (constants.MASTODON !== type) {
            if (constants.EBAY === type) {
              const tmp2Result7 = account(11192);
              redditMetadataItems = tmp2Result7.generateEbayMetadataItems(metadata);
            } else if (constants.PAYPAL === type) {
              const tmp2Result8 = account(11192);
              redditMetadataItems = tmp2Result8.generatePaypalMetadataItems(metadata);
            } else {
              redditMetadataItems = [];
              if (constants.TIKTOK === type) {
                const tmp2Result9 = account(11192);
                redditMetadataItems = tmp2Result9.generateTikTokMetadataItems(metadata);
              }
            }
          }
        }
      }
      const tmp2Result10 = account(11192);
      redditMetadataItems = tmp2Result10.generateTwitterMetadataItems(metadata);
    }
    if (null !== createdAtDate) {
      const push = redditMetadataItems.push;
      let obj = { variant: "text-xs/normal", color: "interactive-text-default", children: intl.format(account(1126).t["9rfonh"], obj3) };
      const Text = tmp2(4886).Text;
      intl = tmp2(1126).intl;
      obj3 = { date: createdAtDate };
      push(closure_14(Text, obj, MetadataFields.CREATED_AT));
    }
    function handleRefresh() {
      self.setState({ metadataRefreshing: true });
      const obj = ConnectedAccountsActionCreatorsDefault;
      const refreshResult = obj.refresh(account.type, account.id);
      refreshResult.finally(() => {
        let state;
        const timerId = setTimeout(() => {
          state.setState({ metadataRefreshing: false, metadataAlreadyRefreshed: true });
        }, 2000);
      });
    }
    if (0 === redditMetadataItems.length) {
      const obj14 = self(5442);
      const value = obj14.get(account.type);
      let hasMetadata;
      if (value != null) {
        hasMetadata = value.hasMetadata;
      }
      let tmp20Result = null;
      if (true === hasMetadata) {
        let stringResult;
        const obj4 = { style: items, children: items1 };
        items = [, ];
        ({ metadataContainer: arr3[0], metadataBannerContainer: arr3[1] } = tmp);
        const obj5 = { text: intl4.string(account(1126).t.y2b7CA), style: tmp.newBadge };
        const TextBadge = tmp2(1188).TextBadge;
        intl4 = tmp2(1126).intl;
        items1 = [closure_14(TextBadge, obj5), , , , ];
        const obj6 = { variant: "text-xs/normal", children: intl5.string(account(1126).t.eH16Gn) };
        const Text2 = tmp2(4886).Text;
        intl5 = tmp2(1126).intl;
        items1[1] = closure_14(Text2, obj6);
        const obj7 = { style: tmp.rowDivider };
        items1[2] = closure_14(View, obj7);
        const obj8 = { style: tmp.addDetailsButton, children: closure_14(Button2, obj9) };
        Button2 = tmp2(5594).Button;
        const metadataAlreadyRefreshed = self.state.metadataAlreadyRefreshed;
        const intl6 = tmp2(1126).intl;
        const string = intl6.string;
        const t = tmp2(1126).t;
        if (metadataAlreadyRefreshed) {
          stringResult = string(t.i4jeWR);
        } else {
          stringResult = string(t["LVh3/5"]);
        }
        obj9 = { text: stringResult, size: "sm", onPress: handleRefresh, disabled: self.state.metadataRefreshing || self.state.metadataAlreadyRefreshed };
        items1[3] = closure_14(View, obj8);
        const obj10 = { style: tmp.learnMoreButton, children: closure_14(Button, obj11) };
        obj11 = {
          text: intl3.string(account(1126).t["8O0mlf"]),
          variant: "secondary",
          size: "sm",
          onPress() {
                const openURL = self(dependencyMap[34]).openURL;
                self(dependencyMap[34]);
                const obj = self(dependencyMap[35]);
                return openURL(obj.getArticleURL(constants.CONNECTION_DETAILS));
              }
        };
        Button = tmp2(5594).Button;
        intl3 = tmp2(1126).intl;
        items1[4] = closure_14(View, obj10);
        tmp20Result = closure_15(View, obj4);
      }
      return tmp20Result;
    } else {
      let tmp19Result;
      const IconButton = tmp2(7575).IconButton;
      if (self.state.metadataAlreadyRefreshed) {
        tmp19Result = closure_14(tmp2(8451).CheckmarkLargeBoldIcon, { size: "sm" });
      } else {
        tmp19Result = closure_14(tmp2(14778).RefreshIcon, { size: "sm" });
      }
      const obj12 = { size: "sm", variant: "icon-only", icon: tmp19Result, accessibilityLabel: intl2.string(account(1126).t.wzzjk9), onPress: handleRefresh, disabled: self.state.metadataRefreshing || self.state.metadataAlreadyRefreshed };
      intl2 = tmp2(1126).intl;
      const obj13 = { style: tmp.metadataContainer, children: items2 };
      items2 = [, ];
      const obj15 = { style: tmp.metadataItemsContainer, children: redditMetadataItems };
      const tmp19Result2 = closure_14(IconButton, obj12);
      items2[0] = closure_14(View, obj15);
      const obj16 = { style: tmp.refreshButtonContainer, children: tmp19Result2 };
      items2[1] = closure_14(View, obj16);
      return closure_15(View, obj13);
    }
  }
  renderFriendSyncCheckRow() {
    let intl;
    const account = this.props.account;
    const friendSync = this.state.friendSync;
    let tmp2 = null;
    const obj = PlatformsDefault;
    if (set.has(obj.get(account.type).type)) {
      const obj2 = { label: intl.string(intl7.t["+KCMSi"]), value: friendSync, onValueChange: this.handleFriendSyncChange };
      const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      intl = intl7.intl;
      tmp2 = authStore2(TableSwitchRow, obj2);
    }
    return tmp2;
  }
  renderActivityCheckRow() {
    let intl;
    let obj3;
    const account = this.props.account;
    const showActivity = this.state.showActivity;
    const obj = PlatformsDefault;
    const value = obj.get(account.type);
    let tmp3 = null;
    if (set2.has(value.type)) {
      const obj2 = { label: intl.formatToPlainString(intl7.t["6u6J0q"], obj3), value: showActivity, onValueChange: this.handleShowActivityChange };
      const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      intl = intl7.intl;
      obj3 = { platform: value.name };
      tmp3 = authStore2(TableSwitchRow, obj2);
    }
    return tmp3;
  }
  renderIntegrationsRow() {
    let intl;
    let items;
    let items1;
    const tmp = legacyClassComponentStyles(this.context);
    const account = this.props.account;
    let tmp2 = null;
    if (account.integrations.length > 0) {
      tmp2 = null;
      if (!account.revoked) {
        let obj = { style: items, children: items1 };
        items = [, ];
        ({ connectedAccountSection: arr[0], integrationsSection: arr[1] } = tmp);
        const obj2 = { style: tmp.integrationCategoryLabel, variant: "eyebrow", color: "mobile-text-heading-primary", children: intl.string(intl7.t.fOe3fZ) };
        const Text = Text_Text.Text;
        intl = intl7.intl;
        items1 = [authStore2(Text, obj2), ];
        integrations = account.integrations;
        items1[1] = integrations.map((integration) => {
          const obj = { integration };
          return closure_1_14(closure_1_18, obj, integration.id);
        });
        tmp2 = closure_15(View, obj);
      }
    }
    return tmp2;
  }
  render() {
    let TableRowGroupContext;
    let icon;
    let intl2;
    let items1;
    let items2;
    let makeSource;
    let name;
    let obj10;
    let obj4;
    let obj7;
    let tmp20Result;
    const self = this;
    const tmp = legacyClassComponentStyles(this.context);
    const props = this.props;
    const account = props.account;
    const theme = props.theme;
    const obj = PlatformsDefault;
    const value = obj.get(account.type);
    const migrationData = value.migrationData;
    let migrationExperimentEnabled;
    if (migrationData != null) {
      migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("User Settings Connections Mobile");
    }
    if (migrationExperimentEnabled) {
      const intl = intl7.intl;
      const obj2 = { platformName: account.name };
      name = intl.format(_modDef3141.Glhokn, obj2);
    } else {
      name = account.name;
    }
    const obj3 = { accessible: true, accessibilityLabel: value.name, style: tmp.platformIcon, size: native.Icon.Sizes.LARGE, source: makeSource(obj4.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG), disableColor: true };
    const Icon = native.Icon;
    makeSource = AvatarUtils.makeSource;
    AvatarUtils;
    icon = value.icon;
    obj4 = shared;
    const obj5 = { size: "sm", variant: "icon-only", icon: authStore2(XLargeBoldIcon.XLargeBoldIcon, { size: "sm" }), accessibilityLabel: intl2.string(intl7.t["DT39A+"]), onPress: self.handleDisconnect };
    const tmp7Result = authStore2(Icon, obj3);
    const IconButton = IconButton2.IconButton;
    intl2 = intl7.intl;
    const tmp7Result2 = authStore2(IconButton, obj5);
    const result = self.renderIntegrationsRow();
    const result1 = self.renderFriendSyncCheckRow();
    const result2 = self.renderActivityCheckRow();
    const result3 = self.renderMetadataVisibilityCheckRow();
    const result4 = self.renderVisibilityCheckRow();
    const renderUpsellResult = self.renderUpsell();
    const obj6 = { style: tmp.container, children: authStore2(View, obj7) };
    obj7 = { style: tmp.connectedAccountItem, children: closure_15(TableRowGroupContext, obj10) };
    const obj8 = { style: tmp.connectedAccountHeader, children: authStore2(TableRow.TableRow, { label: name, icon: tmp7Result, trailing: tmp7Result2 }) };
    const renderMetadataResult = self.renderMetadata();
    TableRowGroupContext = react2.TableRowGroupContext;
    const items = [authStore2(View, obj8), , ];
    if (null != renderUpsellResult) {
      const obj9 = { style: tmp.connectedAccountSection, children: items1 };
      items1 = [renderUpsellResult, renderMetadataResult];
      tmp20Result = closure_15(View, obj9);
    } else {
      tmp20Result = null;
    }
    obj10 = { value: true, children: items };
    items[1] = tmp20Result;
    const obj11 = { children: items2 };
    items2 = [result4, result3, result2, result1, result];
    items[2] = closure_15(RowGroup, obj11);
    return authStore2(View, obj6);
  }
}
const prototype = ConnectedAccount.prototype;
ConnectedAccount.contextType = native2.ThemeContext;
let result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectedAccount.tsx");

export default ConnectedAccount;
export const readStyles = legacyClassComponentStyles;