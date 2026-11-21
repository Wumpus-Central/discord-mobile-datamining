// === Module 14570: WidgetEmptyStateSuggestionUtils ===

// Module 14570 (WidgetEmptyStateSuggestionUtils)
import ApplicationWidgetConstants from "ApplicationWidgetConstants" /* 14571 */;
import size from "module_2" /* 2 */;

({ MARVEL_RIVALS_APPLICATION_ID: c2, WUTHERING_WAVES_APPLICATION_ID: c3 } = ApplicationWidgetConstants);
const result = size.fileFinishedImporting("modules/user_profile/WidgetEmptyStateSuggestionUtils.tsx");

export function getWidgetEmptyStateSuggestions(addableWidgets) {
  addableWidgets = addableWidgets.addableWidgets;
  const prop = addableWidgets.applicationAffinityData;
  items = [];
  const set = new Set();
  let WANT_TO_PLAY_GAMES = Date.now();
  let found = prop.filter((item) => {
    ({ isConnected, lastPlayedAt } = item);
    if (!isConnected) {
      let tmp2 = null != lastPlayedAt;
      if (tmp2) {
        tmp2 = WANT_TO_PLAY_GAMES - lastPlayedAt < 7776000000;
      }
      isConnected = tmp2;
    }
    return isConnected;
  });
  const substr = found.toSorted((isConnected, isConnected2) => {
    if (isConnected.isConnected !== isConnected2.isConnected) {
      let num4 = 1;
      if (isConnected.isConnected) {
        num4 = -1;
      }
      return num4;
    } else {
      let diff = isConnected2.totalPlayDuration - isConnected.totalPlayDuration;
      if (0 === diff) {
        let num2 = isConnected2.lastPlayedAt;
        if (num2 == null) {
          num2 = 0;
        }
        let num3 = isConnected.lastPlayedAt;
        if (num3 == null) {
          num3 = 0;
        }
        diff = num2 - num3;
      }
      return diff;
    }
  }).slice(0, 2);
  const mapped = substr.map((applicationId) => applicationId.applicationId);
  const item = mapped.forEach(function appendByApplicationId(item) {
    closure_0 = item;
    const found = WANT_TO_PLAY_GAMES.find((item) => WANT_TO_PLAY_GAMES(items[1]).isApplicationWidgetWithId(item, closure_0));
    if (null != found) {
      if (!set.has(found.getUniqueKey())) {
        items.push(found);
        set.add(found.getUniqueKey());
      }
    }
  });
  if (addableWidgets.hasClips) {
    WANT_TO_PLAY_GAMES = WANT_TO_PLAY_GAMES(items[2]).WidgetType.CLIPS_GALLERY;
    const found1 = addableWidgets.find((type) => type.type === WANT_TO_PLAY_GAMES);
    if (null != found1) {
      if (!set.has(found1.getUniqueKey())) {
        items.push(found1);
        set.add(found1.getUniqueKey());
      }
    }
  }
  WANT_TO_PLAY_GAMES = WANT_TO_PLAY_GAMES(items[2]).WidgetType.FAVORITE_GAMES;
  const found2 = addableWidgets.find((type) => type.type === WANT_TO_PLAY_GAMES);
  if (null != found2) {
    if (!set.has(found2.getUniqueKey())) {
      items.push(found2);
      set.add(found2.getUniqueKey());
    }
  }
  WANT_TO_PLAY_GAMES = tmp7(tmp8[2]).WidgetType.PLAYED_GAMES;
  const found3 = addableWidgets.find((type) => type.type === WANT_TO_PLAY_GAMES);
  if (null != found3) {
    if (!set.has(found3.getUniqueKey())) {
      items.push(found3);
      set.add(found3.getUniqueKey());
    }
  }
  closure_129_0 = set;
  const found4 = addableWidgets.find((item) => WANT_TO_PLAY_GAMES(items[1]).isApplicationWidgetWithId(item, closure_0));
  if (null != found4) {
    if (!set.has(found4.getUniqueKey())) {
      items.push(found4);
      set.add(found4.getUniqueKey());
    }
  }
  WANT_TO_PLAY_GAMES = tmp7(tmp8[2]).WidgetType.CURRENT_GAMES;
  const found5 = addableWidgets.find((type) => type.type === WANT_TO_PLAY_GAMES);
  if (null != found5) {
    if (!set.has(found5.getUniqueKey())) {
      items.push(found5);
      set.add(found5.getUniqueKey());
    }
  }
  WANT_TO_PLAY_GAMES = tmp7(tmp8[2]).WidgetType.WANT_TO_PLAY_GAMES;
  const found6 = addableWidgets.find((type) => type.type === WANT_TO_PLAY_GAMES);
  if (null != found6) {
    if (!set.has(found6.getUniqueKey())) {
      items.push(found6);
      set.add(found6.getUniqueKey());
    }
  }
  closure_130_0 = closure_3;
  const found7 = addableWidgets.find((item) => WANT_TO_PLAY_GAMES(items[1]).isApplicationWidgetWithId(item, closure_0));
  if (null != found7) {
    if (!set.has(found7.getUniqueKey())) {
      items.push(found7);
      set.add(found7.getUniqueKey());
    }
  }
  return items.slice(0, 6);
}