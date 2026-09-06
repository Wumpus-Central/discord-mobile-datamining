// === Module 12282: ResourceChannelButtons ===

// Module 12282 (ResourceChannelButtons)
import nativeDefault from "native" /* 576 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 12284 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { wrapper: null, buttonWrapper: null, spacer: null, iconColor: null };
createStyles = { display: "flex", flexDirection: "row", padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.wrapper = createStyles;
createStyles.buttonWrapper = { flex: 1 };
createStyles.spacer = { width: 8 };
createStyles.iconColor = { color: nativeDefault.colors.WHITE };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/ResourceChannelButtons.tsx");

export default function ResourceChannelButtons(channel) {
  channel = channel.channel;
  let first;
  _slicedToArray = undefined;
  noop = undefined;
  let obj = channel(first[6]);
  const navigation = obj.useNavigation();
  const tmp4 = closure_8();
  let obj1 = channel(first[7]);
  const tmp5 = _slicedToArray(obj1.usePreviousAndNextResourceChannel(channel.guild_id, channel.id), 2);
  first = tmp5[0];
  _slicedToArray = tmp7;
  const items = [channel.guild_id, navigation];
  noop = noop.useCallback((channelId) => {
    navigation.goBack();
    const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(channel.guild_id, channelId);
  }, items);
  if (null != first) {
    obj = { style: tmp4.wrapper, children: null };
    let tmp11 = null != first;
    if (tmp11) {
      obj = { style: tmp4.buttonWrapper, children: null };
      obj1 = { variant: "secondary", text: first.title, icon: null, onPress: null, grow: true };
      const obj2 = { color: tmp4.iconColor.color, source: navigation(tmp2[11]) };
      obj1.icon = closure_6(tmp(tmp2[10]).Icon, obj2);
      obj1.onPress = function onPress() {
        return closure_4(first.channelId);
      };
      obj.children = closure_6(tmp(tmp2[9]).Button, obj1);
      tmp11 = closure_6(View, obj);
    }
    const items1 = [tmp11, , ];
    let tmp14 = null != first && null != tmp7;
    if (tmp14) {
      const obj3 = { style: tmp4.spacer };
      tmp14 = closure_6(View, obj3);
    }
    items1[1] = tmp14;
    let tmp16 = null != tmp7;
    if (tmp16) {
      const obj4 = { style: tmp4.buttonWrapper, children: null };
      const obj5 = { text: tmp7.title, icon: null, iconPosition: "end", onPress: null, grow: true };
      const obj6 = { color: tmp4.iconColor.color, source: navigation(tmp2[12]) };
      obj5.icon = closure_6(tmp(tmp2[10]).Icon, obj6);
      obj5.onPress = function onPress() {
        return closure_4(channelId.channelId);
      };
      obj4.children = closure_6(tmp(tmp2[9]).Button, obj5);
      tmp16 = closure_6(View, obj4);
    }
    items1[2] = tmp16;
    obj.children = items1;
    let tmp9Result = closure_7(View, obj);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
};