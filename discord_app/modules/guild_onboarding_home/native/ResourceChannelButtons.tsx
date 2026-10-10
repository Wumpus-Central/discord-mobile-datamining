// === Module 11980: ResourceChannelButtons ===

// Module 11980 (ResourceChannelButtons)
import nativeDefault from "native" /* 587 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 9319 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { wrapper: { display: "flex", flexDirection: "row", padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, buttonWrapper: { flex: 1 }, spacer: { width: 8 }, iconColor: null };
let obj3 = { display: "flex", flexDirection: "row", padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.iconColor = { color: nativeDefault.colors.WHITE };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.colors.WHITE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/ResourceChannelButtons.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ResourceChannelButtons(channel) {
  const cResult = channel(first[7]).c(22);
  channel = channel.channel;
  const obj = channel(first[7]);
  const navigation = channel(first[8]).useNavigation();
  let wrapper = closure_8();
  const obj2 = channel(first[8]);
  [first] = channel(first[9]).usePreviousAndNextResourceChannel(channel.guild_id, channel.id);
  _slicedToArray = tmp7;
  if (cResult[0] === channel.guild_id) {
    if (cResult[1] === navigation) {
      let tmp8 = cResult[2];
    }
    closure_4 = tmp8;
    if (null == first) {
      if (null == tmp7) {
        return null;
      }
    }
    if (cResult[3] === tmp8) {
      if (cResult[4] === first) {
        if (cResult[5] === wrapper.buttonWrapper) {
          if (cResult[6] === wrapper.iconColor) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] === tmp7) {
            if (cResult[9] === first) {
              if (cResult[10] === wrapper.spacer) {
                let tmp16 = cResult[11];
              }
              if (cResult[12] === tmp8) {
                if (cResult[13] === tmp7) {
                  if (cResult[14] === wrapper.buttonWrapper) {
                    if (cResult[15] === wrapper.iconColor) {
                      let tmp20 = cResult[16];
                    }
                    if (cResult[17] === wrapper.wrapper) {
                      if (cResult[18] === tmp11) {
                        if (cResult[19] === tmp16) {
                        }
                      }
                    }
                    const obj4 = { style: wrapper.wrapper, children: null };
                    const items = [tmp11, tmp16, tmp20];
                    obj4.children = items;
                    const tmp28 = closure_7(View, obj4);
                    wrapper = wrapper.wrapper;
                    cResult[17] = wrapper;
                    cResult[18] = tmp11;
                    cResult[19] = tmp16;
                    cResult[20] = tmp20;
                    cResult[21] = tmp28;
                  }
                }
              }
              let tmp21 = null != tmp7;
              if (tmp21) {
                const obj5 = { style: wrapper.buttonWrapper, children: null };
                const obj6 = { text: tmp7.title, icon: null, iconPosition: "end", onPress: null, grow: true };
                const obj7 = { color: wrapper.iconColor.color, source: navigation(tmp2[14]) };
                obj6.icon = closure_6(tmp(tmp2[12]).Icon, obj7);
                obj6.onPress = function onPress() {
                  return closure_4(channelId.channelId);
                };
                obj5.children = closure_6(tmp(tmp2[11]).Button, obj6);
                tmp21 = closure_6(View, obj5);
              }
              cResult[12] = tmp8;
              cResult[13] = tmp7;
              cResult[14] = wrapper.buttonWrapper;
              cResult[15] = wrapper.iconColor;
              cResult[16] = tmp21;
              tmp20 = tmp21;
            }
          }
          let tmp17 = null != first && null != tmp7;
          if (tmp17) {
            const obj8 = { style: wrapper.spacer };
            tmp17 = closure_6(View, obj8);
          }
          cResult[8] = tmp7;
          cResult[9] = first;
          cResult[10] = wrapper.spacer;
          cResult[11] = tmp17;
          tmp16 = tmp17;
        }
      }
    }
    let tmp12 = null != first;
    if (tmp12) {
      const obj9 = { style: wrapper.buttonWrapper, children: null };
      const obj10 = { variant: "secondary", text: first.title, icon: null, onPress: null, grow: true };
      const obj11 = { color: wrapper.iconColor.color, source: navigation(tmp2[13]) };
      obj10.icon = closure_6(tmp(tmp2[12]).Icon, obj11);
      obj10.onPress = function onPress() {
        return closure_4(first.channelId);
      };
      obj9.children = closure_6(tmp(tmp2[11]).Button, obj10);
      tmp12 = closure_6(View, obj9);
    }
    cResult[3] = tmp8;
    cResult[4] = first;
    cResult[5] = wrapper.buttonWrapper;
    cResult[6] = wrapper.iconColor;
    cResult[7] = tmp12;
    tmp11 = tmp12;
  }
  const fn = function t(channelId) {
    navigation.goBack();
    const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(channel.guild_id, channelId);
  };
  cResult[0] = channel.guild_id;
  cResult[1] = navigation;
  cResult[2] = fn;
  tmp8 = fn;
  const obj3 = channel(first[9]);
}) : (function ResourceChannelButtons(channel) {
  channel = channel.channel;
  first = undefined;
  noop = undefined;
  const navigation = channel(first[8]).useNavigation();
  const tmp4 = closure_8();
  const obj = channel(first[8]);
  [first] = channel(first[9]).usePreviousAndNextResourceChannel(channel.guild_id, channel.id);
  _slicedToArray = tmp7;
  const items = [channel.guild_id, navigation];
  noop = noop.useCallback((channelId) => {
    navigation.goBack();
    const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(channel.guild_id, channelId);
  }, items);
  if (null != first) {
    const obj3 = { style: tmp4.wrapper, children: null };
    let tmp11 = null != first;
    if (tmp11) {
      const obj4 = { style: tmp4.buttonWrapper, children: null };
      const obj5 = { variant: "secondary", text: first.title, icon: null, onPress: null, grow: true };
      const obj6 = { color: tmp4.iconColor.color, source: navigation(tmp2[13]) };
      obj5.icon = closure_6(tmp(tmp2[12]).Icon, obj6);
      obj5.onPress = function onPress() {
        return closure_4(first.channelId);
      };
      obj4.children = closure_6(tmp(tmp2[11]).Button, obj5);
      tmp11 = closure_6(View, obj4);
    }
    const items1 = [tmp11, , ];
    let tmp14 = null != first && null != tmp7;
    if (tmp14) {
      const obj7 = { style: tmp4.spacer };
      tmp14 = closure_6(View, obj7);
    }
    items1[1] = tmp14;
    let tmp16 = null != tmp7;
    if (tmp16) {
      const obj8 = { style: tmp4.buttonWrapper, children: null };
      const obj9 = { text: tmp7.title, icon: null, iconPosition: "end", onPress: null, grow: true };
      const obj10 = { color: tmp4.iconColor.color, source: navigation(tmp2[14]) };
      obj9.icon = closure_6(tmp(tmp2[12]).Icon, obj10);
      obj9.onPress = function onPress() {
        return closure_4(channelId.channelId);
      };
      obj8.children = closure_6(tmp(tmp2[11]).Button, obj9);
      tmp16 = closure_6(View, obj8);
    }
    items1[2] = tmp16;
    obj3.children = items1;
    let tmp9Result = closure_7(View, obj3);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
});