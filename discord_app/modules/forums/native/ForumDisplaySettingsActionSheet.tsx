// discord_app/modules/forums/native/ForumDisplaySettingsActionSheet.tsx
import tracking_Tracking from "../tracking/Tracking.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import ForumChannelStore from "../ForumChannelStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let channelId, closure_6;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ useForumChannelStoreApi: metroRequire, useForumChannelStore: metroImportDefault } = ForumChannelStore);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let closure_4;
      let first;
      let first1;
      let first2;
      let sortOrder;
      let tmp6;
      let obj = channelId(sortOrder[10]);
      const cResult = obj.c(40);
      const tmp = channelId;
      channelId = channelId.channelId;
      const tmp2 = sortOrder;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [first1];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function b() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(tmp2[11]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      const tmp8 = first2(channelId);
      sortOrder = tmp8.sortOrder;
      const layoutType = tmp8.layoutType;
      const tagSetting = tmp8.tagSetting;
      const tmp9 = closure_6();
      react = tmp9;
      const tmp10 = layoutType(react.useState(sortOrder), 2);
      first1 = tmp10[0];
      closure_6 = tmp10[1];
      const tmp12 = layoutType(react.useState(layoutType), 2);
      first2 = tmp12[0];
      let closure_8 = tmp12[1];
      const tmp14 = layoutType(react.useState(tagSetting), 2);
      const first3 = tmp14[0];
      let closure_10 = tmp14[1];
      const ref = react.useRef(null);
      const ref1 = react.useRef(null);
      const ref2 = react.useRef(null);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function p(arg0) {
          closure_6(arg0);
        };
        cResult[3] = fn2;
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0) {
            closure_8(arg0);
          }
        }
        cResult[4] = B;
      } else {
        class B {
          constructor(arg0) {
            closure_8(arg0);
          }
        }
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0) {
            closure_8(arg0);
          }
        }
        cResult[5] = tmp22;
      } else {
        class B {
          constructor(arg0) {
            closure_8(arg0);
          }
        }
      }
      if (cResult[6] === stateFromStores) {
        class B {
          constructor(arg0) {
            closure_8(arg0);
          }
        }
      }
      class X {
        constructor() {
          if (null != stateFromStores) {
            if (sortOrder !== first1) {
              const obj5 = { guildId: null, channelId: null, sortOrder: first1 };
              ({ guild_id: obj2.guildId, id: obj2.channelId } = stateFromStores);
              const obj = tracking_Tracking;
              const result = obj.trackForumSortOrderUpdated(obj5);
            }
            if (layoutType !== first2) {
              const obj6 = { guildId: null, channelId: null, forumLayout: first2 };
              ({ guild_id: obj4.guildId, id: obj4.channelId } = stateFromStores);
              const obj3 = tracking_Tracking;
              const result1 = obj3.trackForumLayoutUpdated(obj6);
            }
            const state = closure_4.getState();
            state.setLayoutType(channelId, first2);
            const state1 = closure_4.getState();
            state1.setSortOrder(channelId, first1);
            const state2 = closure_4.getState();
            state2.setTagSetting(channelId, first3);
          }
        }
      }
      cResult[6] = stateFromStores;
      cResult[7] = channelId;
      cResult[8] = layoutType;
      cResult[9] = first2;
      cResult[10] = first1;
      cResult[11] = first3;
      cResult[12] = sortOrder;
      cResult[13] = tmp9;
      cResult[14] = X;
    }
  : (channelId) => {
      let ActionSheetHeaderPressableText;
      let BottomSheetScrollView;
      let BottomSheetTitleHeader;
      let _undefined;
      let _undefined2;
      let _undefined3;
      let c10;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      let closure_4;
      let forumLayout;
      let intl;
      let intl10;
      let intl11;
      let intl12;
      let intl13;
      let intl14;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let intl9;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj16;
      let obj4;
      let obj5;
      channelId = channelId.channelId;
      let sortOrder;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      c8 = undefined;
      c9 = undefined;
      c10 = undefined;
      let obj = channelId(sortOrder[11]);
      const items = [c5];
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      const tmp3 = c7(channelId);
      sortOrder = tmp3.sortOrder;
      const layoutType = tmp3.layoutType;
      const tagSetting = tmp3.tagSetting;
      react = c6();
      [c5, c6] = layoutType(react.useState(sortOrder), 2);
      layoutType(react.useState(sortOrder), 2);
      [c7, c8] = layoutType(react.useState(layoutType), 2);
      layoutType(react.useState(layoutType), 2);
      [c9, c10] = layoutType(react.useState(tagSetting), 2);
      layoutType(react.useState(tagSetting), 2);
      const ref = react.useRef(null);
      const ref1 = react.useRef(null);
      const ref2 = react.useRef(null);
      let obj3 = channelId(sortOrder[13]);
      const unmountEffect = obj3.useUnmountEffect(() => {
        if (null != stateFromStores) {
          if (sortOrder !== sortOrder) {
            const obj5 = { guildId: null, channelId: null, sortOrder };
            ({ guild_id: obj2.guildId, id: obj2.channelId } = stateFromStores);
            const obj = tracking_Tracking;
            const result = obj.trackForumSortOrderUpdated(obj5);
          }
          if (layoutType !== forumLayout) {
            const obj6 = { guildId: null, channelId: null, forumLayout };
            ({ guild_id: obj4.guildId, id: obj4.channelId } = stateFromStores);
            const obj3 = tracking_Tracking;
            const result1 = obj3.trackForumLayoutUpdated(obj6);
          }
          const state = closure_4.getState();
          state.setLayoutType(channelId, forumLayout);
          const state1 = closure_4.getState();
          state1.setSortOrder(channelId, sortOrder);
          const state2 = closure_4.getState();
          state2.setTagSetting(channelId, c9);
        }
      });
      [][0] = stateFromStores;
      if (null == stateFromStores) {
        return null;
      } else {
        const tmp12 = null != stateFromStores.availableTags && stateFromStores.availableTags.length > 0;
        const obj2 = {
          scrollable: true,
          header: c8(BottomSheetTitleHeader, obj4),
          children: c8(BottomSheetScrollView, obj16),
        };
        const ActionSheet = tmp(tmp2[21]).ActionSheet;
        obj4 = { title: intl.string(tmp(sortOrder[5]).t.xyYt8A), leading: c8(ActionSheetHeaderPressableText, obj5) };
        BottomSheetTitleHeader = tmp(tmp2[14]).BottomSheetTitleHeader;
        intl = tmp(tmp2[5]).intl;
        obj5 = { onPress: tmp11, label: intl2.string(tmp(sortOrder[5]).t.yBZMsQ) };
        ActionSheetHeaderPressableText = tmp(tmp2[15]).ActionSheetHeaderPressableText;
        intl2 = tmp(tmp2[5]).intl;
        BottomSheetScrollView = tmp(tmp2[18]).BottomSheetScrollView;
        let obj6 = { direction: "vertical", spacing: stateFromStores(sortOrder[20]).space.PX_16, children: items2 };
        const Stack = tmp(tmp2[19]).Stack;
        const obj7 = {
          groupRef: ref,
          hasIcons: false,
          defaultValue: sortOrder,
          onChange(arg0) {
            _undefined(arg0);
          },
          title: intl3.string(channelId(sortOrder[5]).t.f8wNDl),
          accessibilityLabel: intl4.string(channelId(sortOrder[5]).t.f8wNDl),
          children: items1.map((label) => {
            const value = label.value;
            return _undefined2(channelId(sortOrder[16]).TableRadioRow, { label: label.label, value }, value);
          }),
        };
        const TableRadioGroup = tmp(tmp2[17]).TableRadioGroup;
        intl3 = tmp(tmp2[5]).intl;
        intl4 = tmp(tmp2[5]).intl;
        const obj8 = {
          label: intl5.string(channelId(sortOrder[5]).t.jOPmcI),
          value: channelId(sortOrder[6]).ThreadSortOrder.LATEST_ACTIVITY,
        };
        intl5 = tmp(tmp2[5]).intl;
        items1 = [obj8];
        const obj9 = {
          label: intl6.string(channelId(sortOrder[5]).t.UIltXd),
          value: channelId(sortOrder[6]).ThreadSortOrder.CREATION_DATE,
        };
        intl6 = tmp(tmp2[5]).intl;
        items1[1] = obj9;
        items2 = [c8(TableRadioGroup, obj7), ,];
        let tmp13Result = null;
        const tmp14 = c9;
        if (stateFromStores.isForumChannel()) {
          tmp13Result = null;
          if (!stateFromStores.isGameInvitesChannel()) {
            const obj10 = {
              groupRef: ref1,
              hasIcons: false,
              defaultValue: layoutType,
              onChange(arg0) {
                _undefined2(arg0);
              },
              title: intl7.string(channelId(sortOrder[5]).t.mFMDSq),
              accessibilityLabel: intl8.string(channelId(sortOrder[5]).t.h850Ss),
              children: items3.map((label) => {
                const value = label.value;
                return _undefined2(channelId(sortOrder[16]).TableRadioRow, { label: label.label, value }, value);
              }),
            };
            const TableRadioGroup2 = tmp(tmp2[17]).TableRadioGroup;
            intl7 = tmp(tmp2[5]).intl;
            intl8 = tmp(tmp2[5]).intl;
            const obj11 = {
              label: intl9.string(channelId(sortOrder[5]).t["NJFr+g"]),
              value: channelId(sortOrder[7]).ForumLayout.LIST,
            };
            intl9 = tmp(tmp2[5]).intl;
            items3 = [obj11];
            const obj12 = {
              label: intl10.string(channelId(sortOrder[5]).t.wKeggb),
              value: channelId(sortOrder[7]).ForumLayout.GRID,
            };
            intl10 = tmp(tmp2[5]).intl;
            items3[1] = obj12;
            tmp13Result = tmp13(TableRadioGroup2, obj10);
          }
        }
        items2[1] = tmp13Result;
        let tmp13Result2 = null;
        if (tmp12) {
          const obj13 = {
            groupRef: ref2,
            hasIcons: false,
            defaultValue: tagSetting,
            onChange(arg0) {
              _undefined3(arg0);
            },
            title: intl11.string(channelId(sortOrder[5]).t.Paxaug),
            accessibilityLabel: intl12.string(channelId(sortOrder[5]).t.f8wNDl),
            children: items4.map((label) => {
              const value = label.value;
              return _undefined2(channelId(sortOrder[16]).TableRadioRow, { label: label.label, value }, value);
            }),
          };
          const TableRadioGroup3 = tmp(tmp2[17]).TableRadioGroup;
          intl11 = tmp(tmp2[5]).intl;
          intl12 = tmp(tmp2[5]).intl;
          const obj14 = {
            label: intl13.string(channelId(sortOrder[5]).t.rQ0ctQ),
            value: channelId(sortOrder[8]).ThreadSearchTagSetting.MATCH_SOME,
          };
          intl13 = tmp(tmp2[5]).intl;
          items4 = [obj14];
          const obj15 = {
            label: intl14.string(channelId(sortOrder[5]).t.FCXUu0),
            value: channelId(sortOrder[8]).ThreadSearchTagSetting.MATCH_ALL,
          };
          intl14 = tmp(tmp2[5]).intl;
          items4[1] = obj15;
          tmp13Result2 = tmp13(TableRadioGroup3, obj13);
        }
        items2[2] = tmp13Result2;
        obj16 = { children: tmp14(Stack, obj6) };
        return c8(ActionSheet, obj2);
      }
    };
let result = size.fileFinishedImporting("modules/forums/native/ForumDisplaySettingsActionSheet.tsx");

export default tmp4;
