// === Module 19830: LaunchAccountLinkingCampaignActionSheet ===

// Module 19830 (LaunchAccountLinkingCampaignActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import AccountLinkManager from "AccountLinkManager" /* 19832 */;
import AccountLinkingCampaignActionCreators from "AccountLinkingCampaignActionCreators" /* 19836 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import UserStore from "UserStore" /* 1388 */;
import AccountLinkingCampaignStore from "AccountLinkingCampaignStore" /* 19831 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(5152).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5306);
let closure_13 = createStyles.createStyles({ iconContainer: { width: 56, height: 56, alignItems: "center", justifyContent: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_account_linking/native/LaunchAccountLinkingCampaignActionSheet.tsx");

export default function LaunchAccountLinkingCampaignActionSheet(markAsDismissed) {
  _require = markAsDismissed;
  const first = orbCount(endAtUnixS.useState(() => {
    const obj = { campaignId: markAsDismissed.campaignId, applicationId: markAsDismissed.applicationId, orbCount: markAsDismissed.orbCount, endAtUnixS: markAsDismissed.endAtUnixS, openedUserId: null, openedSessionGeneration: null };
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    obj.openedUserId = id;
    obj.openedSessionGeneration = AccountLinkingCampaignStore.getSessionGeneration();
    return obj;
  }), 1)[0];
  const campaignId = first.campaignId;
  const applicationId = first.applicationId;
  orbCount = first.orbCount;
  endAtUnixS = first.endAtUnixS;
  const openedUserId = first.openedUserId;
  const openedSessionGeneration = first.openedSessionGeneration;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const actionSheetKey = markAsDismissed.actionSheetKey;
  let tmp2 = closure_13();
  items = [openedSessionGeneration];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ApplicationStore.getApplication(applicationId));
  const startAuthorization = campaignId(applicationId[10])(stateFromStores).startAuthorization;
  let obj2 = require("initialize");
  const analyticsLocations = campaignId(applicationId[11])(campaignId(applicationId[12]).ACTION_SHEET).analyticsLocations;
  const items1 = [openedUserId, openedSessionGeneration];
  const callback = endAtUnixS.useCallback(() => {
    let tmp2 = null != openedUserId;
    if (tmp2) {
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp2 = id === tmp;
    }
    if (tmp2) {
      tmp2 = AccountLinkingCampaignStore.getSessionGeneration() === openedSessionGeneration;
    }
    return tmp2;
  }, items1);
  const tmp7 = campaignId(applicationId[11]);
  const items2 = [markAsDismissed, actionSheetKey];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    let tmp2 = null == openedUserId;
    if (!tmp2) {
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp2 = id !== tmp;
    }
    if (!tmp2) {
      tmp2 = AccountLinkingCampaignStore.getSessionGeneration() !== openedSessionGeneration;
    }
    return tmp2;
  });
  const tmp10 = orbCount(endAtUnixS.useState(Date.now), 2);
  closure_12 = tmp10[1];
  let result = 1000 * endAtUnixS;
  const tmp12 = null != stateFromStores && result > Math.max(tmp10[0], Date.now()) && !stateFromStores1;
  closure_13 = tmp12;
  let bound = null;
  const obj3 = require("initialize");
  if (tmp12) {
    const _Math = Math;
    const _Date = Date;
    const result1 = 1000 * endAtUnixS;
    const diff = result1 - Date.now();
    bound = Math.min(diff, tmp6(tmp4[14]).Millis.DAY);
  }
  campaignId(applicationId[13])(() => closure_12(Date.now()), bound);
  const items3 = [actionSheetKey, tmp12];
  const effect = obj.useEffect(() => {
    if (!closure_13) {
      ActionSheetActionCreatorsDefault.hideActionSheet(actionSheetKey);
    }
  }, items3);
  const obj4 = { type: null, name: null, properties: null };
  const tmp6Result = campaignId(applicationId[13]);
  obj4.type = require("discord_common/AnalyticsUtils").ImpressionTypes.HALFSHEET;
  obj4.name = require("discord_common/AnalyticsUtils").ImpressionNames.LAUNCH_ACCOUNT_LINKING_CAMPAIGN_SHEET;
  obj4.properties = { campaign_id: campaignId, application_id: applicationId, orb_count: orbCount };
  campaignId(applicationId[16])(obj4, { disableTrack: !tmp12 });
  closure_14 = tmp21;
  const items4 = [analyticsLocations, applicationId, endAtUnixS, orbCount > 0, callback, markAsDismissed, orbCount, startAuthorization];
  const items5 = [campaignId, markAsDismissed];
  const callback1 = obj.useCallback(() => {
    campaignId(applicationId[15]).hideActionSheet();
    let result = 1000 * endAtUnixS;
    if (result > Date.now()) {
      if (callback()) {
        let currentUser = markAsDismissed.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        if (null != id) {
          const sessionGeneration = actionSheetKey.getSessionGeneration();
          function isCurrentSession() {

          }
          markAsDismissed(startAuthorization.TAKE_ACTION);
          let obj2 = {
            analyticsLocations,
            onSuccess() {
                    let tmp = closure_14;
                    if (closure_14) {
                      if (typeof isCurrentSession === "function") {
                        let currentUser = UserStore.getCurrentUser();
                        id = undefined;
                        if (currentUser != null) {
                          id = currentUser.id;
                        }
                        let tmp8 = id === id;
                        if (tmp8) {
                          tmp8 = AccountLinkingCampaignStore.getSessionGeneration() === closure_1;
                        }
                        tmp = tmp8;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }
                    if (tmp) {
                      let obj2 = {
                        applicationId,
                        onSuccess() {
                            if (typeof isCurrentSession === "function") {
                              const currentUser = markAsDismissed.getCurrentUser();
                              id = undefined;
                              if (currentUser != null) {
                                id = currentUser.id;
                              }
                              let tmp6 = id === closure_1_0;
                              if (tmp6) {
                                tmp6 = actionSheetKey.getSessionGeneration() === closure_1_1;
                              }
                              if (tmp6) {
                                const obj2 = { orbCount };
                                campaignId(applicationId[15]).openLazy(closure_0(applicationId[20])(applicationId[19], applicationId.paths), "IncentivizedAccountLinkConfirmationBottomSheet", obj2);
                                const obj = campaignId(applicationId[15]);
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }
                      };
                      const result = AccountLinkManager.claimIncentivizedAccountLinkingReward(obj2);
                    }
                  }
          };
          startAuthorization(obj2);
        }
      }
    }
    let obj = campaignId(applicationId[15]);
  }, items4);
  if (tmp12) {
    const obj6 = { style: tmp2.iconContainer, children: null };
    const obj7 = { game: stateFromStores, size: tmp3(tmp4[23]).GameIconSizes.NORMAL };
    obj6.children = analyticsLocations(tmp6(tmp4[23]), obj7);
    const items6 = [analyticsLocations(openedUserId, obj6), ];
    let tmp24Result = tmp21;
    if (tmp21) {
      const obj8 = { children: null };
      const obj9 = { size: "md", color: tmp6(tmp4[25]).colors.ICON_MUTED, accessible: false };
      const items7 = [tmp25(tmp3(tmp4[24]).MoreHorizontalIcon, obj9), ];
      const obj10 = { style: tmp2.iconContainer, children: null };
      const obj11 = { size: "lg", color: tmp6(tmp4[25]).colors.TEXT_STRONG };
      obj10.children = tmp25(tmp3(tmp4[26]).OrbsIcon, obj11);
      items7[1] = tmp25(tmp26, obj10);
      obj8.children = items7;
      tmp24Result = tmp24(callback, obj8);
    }
    const obj12 = { direction: "horizontal", justify: "center", align: "center", children: null };
    items6[1] = tmp24Result;
    obj12.children = items6;
    tmp26 = openedUserId;
    const tmp6Result4 = tmp6(tmp4[23]);
    const obj13 = { children: null };
    const obj14 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
    const intl = tmp3(tmp4[28]).intl;
    obj14.text = intl.string(tmp6(tmp4[29]).QrkiD2);
    const obj15 = { size: "sm", color: tmp6(tmp4[25]).colors.ICON_OVERLAY_LIGHT };
    obj14.icon = analyticsLocations(tmp3(tmp4[30]).WindowLaunchIcon, obj15);
    obj14.onPress = callback1;
    const items8 = [analyticsLocations(tmp3(tmp4[27]).Button, obj14), ];
    const obj16 = { text: null, variant: "secondary", size: "lg", onPress: null };
    const intl2 = tmp3(tmp4[28]).intl;
    obj16.text = intl2.string(tmp3(tmp4[28]).t.TulDPl);
    obj16.onPress = tmp23;
    items8[1] = analyticsLocations(tmp3(tmp4[27]).Button, obj16);
    obj13.children = items8;
    const tmp24Result3 = closure_12(tmp3(tmp4[22]).Stack, obj12);
    const obj17 = { title: null, description: null, illustration: null, actions: null, onDismiss: null };
    const intl3 = tmp3(tmp4[28]).intl;
    const obj18 = { applicationName: stateFromStores.name };
    obj17.title = intl3.formatToPlainString(tmp6(tmp4[29]).UV9ikL, obj18);
    const intl4 = tmp3(tmp4[28]).intl;
    if (tmp21) {
      const obj19 = {
        orbCount,
        orbsIconHook(arg0, arg1) {
              return analyticsLocations(markAsDismissed(applicationId[26]).OrbsIcon, { size: "xs", color: campaignId(applicationId[25]).colors.TEXT_STRONG }, arg1);
            }
      };
      let formatResult = intl4.format(tmp6(tmp4[29]).SRetJj, obj19);
    } else {
      formatResult = intl4.string(tmp6(tmp4[29])["jX/Uhq"]);
    }
    obj17.description = formatResult;
    obj17.illustration = tmp24Result3;
    obj17.actions = closure_12(tmp3(tmp4[22]).Stack, obj13);
    obj17.onDismiss = function onDismiss() {
      return markAsDismissed(ContentDismissActionType.USER_DISMISS);
    };
    return analyticsLocations(tmp3(tmp4[31]).PromoSheet, obj17);
  } else {
    return null;
  }
  const obj5 = { disableTrack: !tmp12 };
  const tmp6Result3 = campaignId(applicationId[16]);
};