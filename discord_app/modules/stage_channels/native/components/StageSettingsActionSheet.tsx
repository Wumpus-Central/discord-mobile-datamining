// discord_app/modules/stage_channels/native/components/StageSettingsActionSheet.tsx
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "getParticipants" /* 4773 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "getUncachedChannelPermissions" /* 4021 */;
import closure_8 from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import { STAGE_SETTINGS_SHEET_KEY } from "MAX_STAGE_TOPIC_LENGTH" /* 4978 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ ChannelSettingsSections: c10, UserSettingsSections: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { container: { marginTop: 8 }, icon: null, warning: null };
createCacheKey = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { color: ThemesDefault.unsafe_rawColors.RED_400 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: ThemesDefault.unsafe_rawColors.RED_400 };
let result = require("set").fileFinishedImporting("modules/stage_channels/native/components/StageSettingsActionSheet.tsx");

export default function StageSettingsActionSheet(channelId) {
  channelId = channelId.channelId;
  const onOpenRTCDebugOverlay = channelId.onOpenRTCDebugOverlay;
  let stateFromStores;
  const tmp = callback();
  let obj = channelId(stateFromStores[12]);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getChannel(channelId));
  obj1 = channelId(stateFromStores[12]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_7.can(channelId(stateFromStores[13]).MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores));
  let obj2 = channelId(stateFromStores[14]);
  const isStageSpeakingDisabledForCurrentUser = obj2.useIsStageSpeakingDisabledForCurrentUser();
  let obj3 = channelId(stateFromStores[12]);
  const items2 = [closure_5];
  const items3 = [channelId];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => closure_1_5.getSelectedParticipant(channelId), items3);
  let obj4 = channelId(stateFromStores[12]);
  const items4 = [closure_8];
  const items5 = [stateFromStores];
  const stateFromStores3 = obj4.useStateFromStores(items4, () => closure_1_8.getStageInstanceByChannel(channelId));
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      onOpenRTCDebugOverlay(stateFromStores[11]).hideActionSheet(closure_1_9);
      const obj = onOpenRTCDebugOverlay(stateFromStores[11]);
    }
  }, items5);
  let tmp11Result1 = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    let tmp14 = null;
    if (stateFromStores1) {
      tmp14 = null;
      if (null == stateFromStores2) {
        tmp14 = null;
        if (!isStageSpeakingDisabledForCurrentUser) {
          if (null != stateFromStores3) {
            const intl2 = tmp2(tmp3[17]).intl;
            let stringResult = intl2.string(tmp2(tmp3[17]).t["5BKP4y"]);
          } else {
            const intl = tmp2(tmp3[17]).intl;
            stringResult = intl.string(tmp2(tmp3[17]).t.s8mM8A);
          }
          obj = { label: null, leading: null, onPress: null };
          obj[0] = stringResult;
          obj1 = { source: null, color: null };
          obj1[0] = onOpenRTCDebugOverlay(tmp3[19]);
          obj1[1] = tmp.icon.color;
          obj[1] = tmp11(tmp2(tmp3[18]).Icon, obj1);
          obj[2] = function onPress() {
            if (null != stateFromStores) {
              const result = channelId(stateFromStores[20]).openStageChannelSettings(tmp);
              const obj = channelId(stateFromStores[20]);
              onOpenRTCDebugOverlay(stateFromStores[11]).hideActionSheet(closure_1_9);
              const obj2 = onOpenRTCDebugOverlay(stateFromStores[11]);
            }
          };
          let tmp11Result = tmp11(tmp2(tmp3[16]).FormRow, obj);
        }
      }
    }
    const items6 = [tmp14, , , , ];
    obj2 = { label: null, leading: null, onPress: null };
    const intl3 = tmp2(tmp3[17]).intl;
    obj2[0] = intl3.string(tmp2(tmp3[17]).t.NiTd0e);
    obj3 = { source: null, color: null };
    obj3[0] = onOpenRTCDebugOverlay(tmp3[21]);
    obj3[1] = tmp.icon.color;
    obj2[1] = closure_12(tmp2(tmp3[18]).Icon, obj3);
    obj2[2] = function onPress() {
      let obj = channelId(stateFromStores[22]);
      obj = { screen: constants.VOICE };
      obj.openUserSettings(obj);
      onOpenRTCDebugOverlay(stateFromStores[11]).hideActionSheet(closure_9);
    };
    items6[1] = closure_12(tmp2(tmp3[16]).FormRow, obj2);
    obj4 = { label: null, leading: null, onPress: null };
    const intl4 = tmp2(tmp3[17]).intl;
    obj4[0] = intl4.string(tmp2(tmp3[17]).t.h850Ss);
    const obj5 = { source: null, color: null };
    obj5[0] = onOpenRTCDebugOverlay(tmp3[23]);
    obj5[1] = tmp.icon.color;
    obj4[1] = closure_12(tmp2(tmp3[18]).Icon, obj5);
    obj4[2] = function onPress() {
      if (null != stateFromStores) {
        onOpenRTCDebugOverlay(stateFromStores[24]).setSection(closure_1_10.NOTIFICATIONS);
        const obj = onOpenRTCDebugOverlay(stateFromStores[24]);
        onOpenRTCDebugOverlay(stateFromStores[24]).open(tmp.id);
        const obj2 = onOpenRTCDebugOverlay(stateFromStores[24]);
        onOpenRTCDebugOverlay(stateFromStores[11]).hideActionSheet(closure_1_9);
        const obj3 = onOpenRTCDebugOverlay(stateFromStores[11]);
      }
    };
    items6[2] = closure_12(tmp2(tmp3[16]).FormRow, obj4);
    tmp11Result = null != onOpenRTCDebugOverlay;
    if (tmp11Result) {
      const obj6 = { label: null, leading: null, onPress: null };
      const intl5 = tmp2(tmp3[17]).intl;
      obj6[0] = intl5.string(tmp2(tmp3[17]).t.X8bCMe);
      const obj7 = { source: null, color: null };
      obj7[0] = tmp18(tmp3[25]);
      obj7[1] = tmp.icon.color;
      obj6[1] = tmp11(tmp2(tmp3[18]).Icon, obj7);
      obj6[2] = function onPress() {
        if (onOpenRTCDebugOverlay != null) {
          tmp();
        }
        onOpenRTCDebugOverlay(stateFromStores[11]).hideActionSheet(closure_1_9);
      };
      tmp11Result = tmp11(tmp2(tmp3[16]).FormRow, obj6);
    }
    const obj8 = { keyboardShouldPersistTaps: "always", children: null };
    items6[3] = tmp11Result;
    const obj9 = { label: null, leading: null, onPress: null };
    const obj10 = { text: null, style: null };
    const intl6 = tmp2(tmp3[17]).intl;
    obj10[0] = intl6.string(tmp2(tmp3[17]).t["+78Pfm"]);
    obj10[1] = tmp.warning;
    obj9[0] = closure_12(tmp2(tmp3[16]).FormLabel, obj10);
    const obj11 = { color: null, source: null };
    obj11[0] = onOpenRTCDebugOverlay(tmp3[10]).unsafe_rawColors.RED_400;
    obj11[1] = onOpenRTCDebugOverlay(tmp3[26]);
    obj9[1] = closure_12(tmp2(tmp3[18]).Icon, obj11);
    obj9[2] = function onPress() {
      if (null != stateFromStores) {
        const result = channelId(stateFromStores[27]).showReportModalForStageChannel(tmp);
        const obj = channelId(stateFromStores[27]);
        onOpenRTCDebugOverlay(stateFromStores[11]).hideActionSheet(closure_1_9);
        const obj2 = onOpenRTCDebugOverlay(stateFromStores[11]);
      }
    };
    items6[4] = closure_12(tmp2(tmp3[16]).FormRow, obj9);
    obj[1] = items6;
    obj8[1] = closure_13(View, obj);
    tmp11Result1 = tmp11(tmp2(tmp3[15]).ActionSheet, obj8);
    const tmp12 = closure_13;
    const tmp13 = View;
  }
  return tmp11Result1;
};