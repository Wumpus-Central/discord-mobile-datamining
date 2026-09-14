// discord_app/modules/forums/native/ForumDisplaySettingsActionSheet.tsx
import tracking_Tracking from "../tracking/Tracking.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
const ForumChannelStore = fn(12131);
({ useForumChannelStoreApi: metroRequire, useForumChannelStore: closure_7 } = ForumChannelStore);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumDisplaySettingsActionSheet.tsx");

export default function ForumDisplaySettingsActionSheet(channelId) {
  channelId = channelId.channelId;
  let sortOrder;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  const items = [c5];
  const stateFromStores = channelId(sortOrder[9]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp3 = c7(channelId);
  sortOrder = tmp3.sortOrder;
  const layoutType = tmp3.layoutType;
  const tagSetting = tmp3.tagSetting;
  noop = c6();
  let obj = channelId(sortOrder[9]);
  [c5, c6] = layoutType(noop.useState(sortOrder), 2);
  const tmp4 = layoutType(noop.useState(sortOrder), 2);
  [c7, c8] = layoutType(noop.useState(layoutType), 2);
  const tmp5 = layoutType(noop.useState(layoutType), 2);
  [c9, c10] = layoutType(noop.useState(tagSetting), 2);
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const tmp6 = layoutType(noop.useState(tagSetting), 2);
  const unmountEffect = channelId(sortOrder[10]).useUnmountEffect(() => {
    if (null != stateFromStores) {
      if (sortOrder !== sortOrder) {
        const obj5 = { guildId: null, channelId: null, sortOrder: null };
        ({ guild_id: obj2.guildId, id: obj2.channelId } = stateFromStores);
        obj5.sortOrder = sortOrder;
        const result = tracking_Tracking.trackForumSortOrderUpdated(obj5);
      }
      if (layoutType !== forumLayout) {
        const obj6 = { guildId: null, channelId: null, forumLayout: null };
        ({ guild_id: obj4.guildId, id: obj4.channelId } = stateFromStores);
        obj6.forumLayout = forumLayout;
        const result1 = tracking_Tracking.trackForumLayoutUpdated(obj6);
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
    let tmp12 = null != stateFromStores.availableTags;
    if (tmp12) {
      tmp12 = stateFromStores.availableTags.length > 0;
    }
    const obj2 = { scrollable: true, header: null, children: null };
    const obj4 = { title: null, leading: null };
    const intl = tmp(tmp2[5]).intl;
    obj4.title = intl.string(tmp(tmp2[5]).t.xyYt8A);
    let obj5 = { onPress: tmp11, label: null };
    const intl2 = tmp(tmp2[5]).intl;
    obj5.label = intl2.string(tmp(tmp2[5]).t.yBZMsQ);
    obj4.leading = c8(tmp(tmp2[14]).ActionSheetHeaderPressableText, obj5);
    obj2.header = c8(tmp(tmp2[13]).BottomSheetTitleHeader, obj4);
    let obj6 = { direction: "vertical", spacing: stateFromStores(tmp2[17]).space.PX_16, children: null };
    const obj7 = {
      groupRef: ref,
      hasIcons: false,
      defaultValue: sortOrder,
      onChange(arg0) {
        _undefined(arg0);
      },
      title: null,
      accessibilityLabel: null,
      children: null,
    };
    const intl3 = tmp(tmp2[5]).intl;
    obj7.title = intl3.string(tmp(tmp2[5]).t.f8wNDl);
    const intl4 = tmp(tmp2[5]).intl;
    obj7.accessibilityLabel = intl4.string(tmp(tmp2[5]).t.f8wNDl);
    const obj8 = { label: null, value: null };
    const intl5 = tmp(tmp2[5]).intl;
    obj8.label = intl5.string(tmp(tmp2[5]).t.jOPmcI);
    obj8.value = tmp(tmp2[6]).ThreadSortOrder.LATEST_ACTIVITY;
    const items1 = [obj8];
    const obj9 = { label: null, value: null };
    const intl6 = tmp(tmp2[5]).intl;
    obj9.label = intl6.string(tmp(tmp2[5]).t.UIltXd);
    obj9.value = tmp(tmp2[6]).ThreadSortOrder.CREATION_DATE;
    items1[1] = obj9;
    obj7.children = items1.map((label) => {
      value = label.value;
      return _undefined2(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
    });
    const items2 = [c8(tmp(tmp2[18]).TableRadioGroup, obj7), ,];
    let tmp13Result = null;
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
          title: null,
          accessibilityLabel: null,
          children: null,
        };
        const intl7 = tmp(tmp2[5]).intl;
        obj10.title = intl7.string(tmp(tmp2[5]).t.mFMDSq);
        const intl8 = tmp(tmp2[5]).intl;
        obj10.accessibilityLabel = intl8.string(tmp(tmp2[5]).t.h850Ss);
        const obj11 = { label: null, value: null };
        const intl9 = tmp(tmp2[5]).intl;
        obj11.label = intl9.string(tmp(tmp2[5]).t["NJFr+g"]);
        obj11.value = tmp(tmp2[7]).ForumLayout.LIST;
        const items3 = [obj11];
        const obj12 = { label: null, value: null };
        const intl10 = tmp(tmp2[5]).intl;
        obj12.label = intl10.string(tmp(tmp2[5]).t.wKeggb);
        obj12.value = tmp(tmp2[7]).ForumLayout.GRID;
        items3[1] = obj12;
        obj10.children = items3.map((label) => {
          value = label.value;
          return _undefined2(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
        });
        tmp13Result = tmp13(tmp(tmp2[18]).TableRadioGroup, obj10);
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
        title: null,
        accessibilityLabel: null,
        children: null,
      };
      const intl11 = tmp(tmp2[5]).intl;
      obj13.title = intl11.string(tmp(tmp2[5]).t.Paxaug);
      const intl12 = tmp(tmp2[5]).intl;
      obj13.accessibilityLabel = intl12.string(tmp(tmp2[5]).t.f8wNDl);
      const obj14 = { label: null, value: null };
      const intl13 = tmp(tmp2[5]).intl;
      obj14.label = intl13.string(tmp(tmp2[5]).t.rQ0ctQ);
      obj14.value = tmp(tmp2[8]).ThreadSearchTagSetting.MATCH_SOME;
      const items4 = [obj14];
      const obj15 = { label: null, value: null };
      const intl14 = tmp(tmp2[5]).intl;
      obj15.label = intl14.string(tmp(tmp2[5]).t.FCXUu0);
      obj15.value = tmp(tmp2[8]).ThreadSearchTagSetting.MATCH_ALL;
      items4[1] = obj15;
      obj13.children = items4.map((label) => {
        value = label.value;
        return _undefined2(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
      });
      tmp13Result2 = tmp13(tmp(tmp2[18]).TableRadioGroup, obj13);
    }
    const obj16 = { children: null };
    items2[2] = tmp13Result2;
    obj6.children = items2;
    obj16.children = c9(tmp(tmp2[16]).Stack, obj6);
    obj2.children = c8(tmp(tmp2[15]).BottomSheetScrollView, obj16);
    return c8(tmp(tmp2[12]).ActionSheet, obj2);
  }
  let obj3 = channelId(sortOrder[10]);
}
