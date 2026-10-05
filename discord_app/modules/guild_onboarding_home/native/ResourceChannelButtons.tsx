// discord_app/modules/guild_onboarding_home/native/ResourceChannelButtons.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GuildOnboardingHomeActionCreators from "../GuildOnboardingHomeActionCreators.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let channel, navigation;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, buttonWrapper: { flex: 1 }, spacer: { width: 8 }, iconColor: obj3 };
obj2 = {
  display: "flex",
  flexDirection: "row",
  padding: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.WHITE };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let Button;
      let Button2;
      let Icon;
      let Icon2;
      let channelId;
      let first;
      let items;
      let obj10;
      let obj11;
      let obj6;
      let obj7;
      let obj = channel(first[7]);
      const cResult = obj.c(22);
      channel = channel.channel;
      const obj2 = channel(first[8]);
      navigation = obj2.useNavigation();
      const tmp5 = closure_8();
      const obj3 = channel(first[9]);
      const tmp6 = _slicedToArray(obj3.usePreviousAndNextResourceChannel(channel.guild_id, channel.id), 2);
      first = tmp6[0];
      _slicedToArray = tmp8;
      if (cResult[0] === channel.guild_id) {
        let tmp9;
        let tmp11;
        if (cResult[1] === navigation) {
          tmp9 = cResult[2];
        }
        let closure_4 = tmp9;
        if (null != first) {
          if (cResult[3] === tmp9) {
            if (cResult[4] === first) {
              if (cResult[5] === tmp5.buttonWrapper) {
                let tmp12;
                if (cResult[6] === tmp5.iconColor) {
                  tmp12 = cResult[7];
                }
                if (cResult[8] === tmp6[1]) {
                  if (cResult[9] === first) {
                    let tmp17;
                    if (cResult[10] === tmp5.spacer) {
                      tmp17 = cResult[11];
                    }
                    if (cResult[12] === tmp9) {
                      if (cResult[13] === tmp6[1]) {
                        if (cResult[14] === tmp5.buttonWrapper) {
                          let tmp21;
                          if (cResult[15] === tmp5.iconColor) {
                            tmp21 = cResult[16];
                          }
                          if (cResult[17] === tmp5.wrapper) {
                            if (cResult[18] === tmp12) {
                              if (cResult[19] === tmp17) {
                                let tmp26;
                                if (cResult[20] === tmp21) {
                                  tmp26 = cResult[21];
                                }
                                tmp11 = tmp26;
                              }
                            }
                          }
                          const obj4 = { style: tmp5.wrapper, children: items };
                          items = [tmp12, tmp17, tmp21];
                          const tmp29 = closure_7(View, obj4);
                          cResult[17] = tmp5.wrapper;
                          cResult[18] = tmp12;
                          cResult[19] = tmp17;
                          cResult[20] = tmp21;
                          cResult[21] = tmp29;
                          tmp26 = tmp29;
                        }
                      }
                    }
                    let tmp22 = null != tmp8;
                    if (tmp22) {
                      const obj5 = { style: tmp5.buttonWrapper, children: closure_6(Button2, obj6) };
                      obj6 = {
                        text: tmp6[1].title,
                        icon: closure_6(Icon2, obj7),
                        iconPosition: "end",
                        onPress() {
                          return closure_4(channelId.channelId);
                        },
                        grow: true,
                      };
                      Button2 = tmp(tmp2[11]).Button;
                      obj7 = { color: tmp5.iconColor.color, source: navigation(first[14]) };
                      Icon2 = tmp(tmp2[12]).Icon;
                      tmp22 = closure_6(View, obj5);
                    }
                    cResult[12] = tmp9;
                    cResult[13] = tmp6[1];
                    cResult[14] = tmp5.buttonWrapper;
                    cResult[15] = tmp5.iconColor;
                    cResult[16] = tmp22;
                    tmp21 = tmp22;
                  }
                }
                let tmp18 = null != first && null != tmp8;
                if (tmp18) {
                  const obj8 = { style: tmp5.spacer };
                  tmp18 = closure_6(View, obj8);
                }
                cResult[8] = tmp6[1];
                cResult[9] = first;
                cResult[10] = tmp5.spacer;
                cResult[11] = tmp18;
                tmp17 = tmp18;
              }
            }
          }
          let tmp13 = null != first;
          if (tmp13) {
            const obj9 = { style: tmp5.buttonWrapper, children: closure_6(Button, obj10) };
            obj10 = {
              variant: "secondary",
              text: first.title,
              icon: closure_6(Icon, obj11),
              onPress() {
                return closure_4(first.channelId);
              },
              grow: true,
            };
            Button = tmp(tmp2[11]).Button;
            obj11 = { color: tmp5.iconColor.color, source: navigation(first[13]) };
            Icon = tmp(tmp2[12]).Icon;
            tmp13 = closure_6(View, obj9);
          }
          cResult[3] = tmp9;
          cResult[4] = first;
          cResult[5] = tmp5.buttonWrapper;
          cResult[6] = tmp5.iconColor;
          cResult[7] = tmp13;
          tmp12 = tmp13;
        } else {
          tmp11 = null;
        }
        return tmp11;
      }
      const fn = function t(channelId) {
        navigation.goBack();
        const obj = GuildOnboardingHomeActionCreators;
        const homeResourceChannel = obj.selectHomeResourceChannel(channel.guild_id, channelId);
      };
      cResult[0] = channel.guild_id;
      cResult[1] = navigation;
      cResult[2] = fn;
      tmp9 = fn;
    }
  : (channel) => {
      let Button;
      let Button2;
      let Icon;
      let Icon2;
      let channelId;
      let closure_4;
      let items1;
      let obj10;
      let obj5;
      let obj6;
      let obj9;
      let tmp9Result;
      channel = channel.channel;
      let first;
      _slicedToArray = undefined;
      react = undefined;
      let obj = channel(first[8]);
      navigation = obj.useNavigation();
      const tmp4 = closure_8();
      const obj2 = channel(first[9]);
      const tmp5 = _slicedToArray(obj2.usePreviousAndNextResourceChannel(channel.guild_id, channel.id), 2);
      first = tmp5[0];
      _slicedToArray = tmp7;
      const items = [channel.guild_id, navigation];
      react = react.useCallback((channelId) => {
        navigation.goBack();
        const obj = GuildOnboardingHomeActionCreators;
        const homeResourceChannel = obj.selectHomeResourceChannel(channel.guild_id, channelId);
      }, items);
      if (null != first) {
        let tmp11 = null != first;
        const obj3 = { style: tmp4.wrapper, children: items1 };
        if (tmp11) {
          const obj4 = { style: tmp4.buttonWrapper, children: closure_6(Button, obj5) };
          obj5 = {
            variant: "secondary",
            text: first.title,
            icon: closure_6(Icon, obj6),
            onPress() {
              return closure_4(first.channelId);
            },
            grow: true,
          };
          Button = tmp(tmp2[11]).Button;
          obj6 = { color: tmp4.iconColor.color, source: navigation(first[13]) };
          Icon = tmp(tmp2[12]).Icon;
          tmp11 = closure_6(View, obj4);
        }
        items1 = [tmp11, ,];
        let tmp14 = null != first && null != tmp7;
        if (tmp14) {
          const obj7 = { style: tmp4.spacer };
          tmp14 = closure_6(View, obj7);
        }
        items1[1] = tmp14;
        let tmp16 = null != tmp7;
        if (tmp16) {
          const obj8 = { style: tmp4.buttonWrapper, children: closure_6(Button2, obj9) };
          obj9 = {
            text: tmp5[1].title,
            icon: closure_6(Icon2, obj10),
            iconPosition: "end",
            onPress() {
              return closure_4(channelId.channelId);
            },
            grow: true,
          };
          Button2 = tmp(tmp2[11]).Button;
          obj10 = { color: tmp4.iconColor.color, source: navigation(first[14]) };
          Icon2 = tmp(tmp2[12]).Icon;
          tmp16 = closure_6(View, obj8);
        }
        items1[2] = tmp16;
        tmp9Result = closure_7(View, obj3);
      } else {
        tmp9Result = null;
      }
      return tmp9Result;
    };
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/ResourceChannelButtons.tsx");

export default tmp4;
