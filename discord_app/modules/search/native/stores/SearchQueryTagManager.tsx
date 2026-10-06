// discord_app/modules/search/native/stores/SearchQueryTagManager.tsx
import TrackingConstants from "../tracking/TrackingConstants.tsx";
import SearchConstants from "../../SearchConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let set;

function isComplete(type) {
  return type.type === SearchQueryTagTypes.COMPLETE;
}
const SearchQueryTagTypes = SearchConstants.SearchQueryTagTypes;
const SearchFilterAddLocations = TrackingConstants.SearchFilterAddLocations;
const result = size.fileFinishedImporting("modules/search/native/stores/SearchQueryTagManager.tsx");
class SearchQueryTagManager {
  constructor() {
    const merged = Object.assign({ tags: null, ids: null, channelIds: null, version: 0 });
    merged[0] = [];
    merged[1] = new Set();
    new Set();
    merged[2] = new Set();
    new Set();
    return merged;
  }
  markChanged() {
    set = new Set();
    const set1 = new Set();
    const tags = this.tags;
    const item = tags.forEach((text) => {
      set.add(text.text);
      const tmp2 = text.type === SearchQueryTagTypes.COMPLETE && null != text.channelId;
      if (tmp2) {
        set1.add(text.channelId);
      }
    });
    this.ids = set;
    this.channelIds = set1;
    this.version = this.version + 1;
  }
  mergeTag(location, channelId) {
    let closure_0 = location;
    let closure_1 = channelId;
    const tags = this.tags;
    const items = [];
    items[
      HermesBuiltin.arraySpread(
        items,
        tags.filter((item) => item !== userId && item !== closure_1_1),
        0,
      )
    ] = {
      type: SearchQueryTagTypes.COMPLETE,
      text: "" + location.text + " " + channelId.text,
      location: location.location,
      searchTokenType: location.searchTokenType,
      channelId: channelId.channelId,
      userId: channelId.userId,
    };
    this.tags = items;
    ({
      type: SearchQueryTagTypes.COMPLETE,
      text: "" + location.text + " " + channelId.text,
      location: location.location,
      searchTokenType: location.searchTokenType,
      channelId: channelId.channelId,
      userId: channelId.userId,
    });
  }
  replaceTag(arg0, type) {
    let closure_0 = arg0;
    let closure_1 = type;
    const tags = this.tags;
    this.tags = tags.map((item) => {
      let tmp = item;
      if (item === closure_0) {
        tmp = type;
      }
      return tmp;
    });
  }
  exists(text) {
    const ids = this.ids;
    return ids.has(text.text);
  }
  getChannelIds() {
    return this.channelIds;
  }
  getUserIds(arg0) {
    let closure_0 = arg0;
    set = new Set();
    const tags = this.tags;
    const item = tags.forEach((type) => {
      if (type.type === SearchQueryTagTypes.COMPLETE) {
        const userId = type.userId;
        const tmp2 = type.searchTokenType === closure_0 && null != userId;
        if (tmp2) {
          set.add(userId);
        }
      }
    });
    return set;
  }
  isChannelTagsOnly() {
    const tags = this.tags;
    const found = tags.filter(isComplete);
    return found.every((channelId) => null != channelId.channelId);
  }
  hasUserAddedTags() {
    const tags = this.tags;
    const found = tags.filter(isComplete);
    return found.some((location) => location.location !== constants.CLIENT_AUTO_ADD);
  }
  isEmpty() {
    return 0 === this.tags.length;
  }
  getPrefixTag() {
    if (null != this.tags[this.tags.length - 1]) {
      let tmp3;
      if (this.tags[this.tags.length - 1].type === SearchQueryTagTypes.PREFIX) {
        tmp3 = tmp;
      }
      return tmp3;
    }
  }
  get() {
    return this.tags;
  }
  set(tags) {
    this.tags = tags;
    this.markChanged();
  }
  getQueryString() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    const tags = this.tags;
    const found = tags.filter((type) => {
      let tmp2 = !tmp;
      if (type.type === SearchQueryTagTypes.PREFIX) {
        tmp2 = flag;
      }
      return tmp2;
    });
    let str = "";
    if (0 !== found.length) {
      const mapped = found.map((text) => text.text);
      const tmp = globalThis;
      const _HermesInternal = HermesInternal;
      str = "" + mapped.join(" ");
    }
    return str;
  }
  add(type) {
    const self = this;
    if (!this.exists(type)) {
      if (type.type === SearchQueryTagTypes.PREFIX) {
        if (null != self.tags[self.tags.length - 1]) {
          if (self.tags[self.tags.length - 1].type === SearchQueryTagTypes.PREFIX) {
            self.replaceTag(self.tags[self.tags.length - 1], type);
          }
          self.markChanged();
        }
      }
      if (type.type === SearchQueryTagTypes.ANSWER) {
        if (null != self.tags[self.tags.length - 1]) {
          if (self.tags[self.tags.length - 1].type === SearchQueryTagTypes.PREFIX) {
            self.mergeTag(self.tags[self.tags.length - 1], type);
          }
        }
      }
      const tmp6 = type.type === SearchQueryTagTypes.PREFIX || type.type === SearchQueryTagTypes.COMPLETE;
      if (tmp6) {
        const items = [];
        items[HermesBuiltin.arraySpread(items, self.tags, 0)] = type;
        self.tags = items;
      }
    }
  }
  removeAnyPrefixTags() {
    const tags = this.tags;
    this.tags = tags.filter((type) => type.type !== constants.PREFIX);
    this.markChanged();
  }
  removeAtIndex(arg0) {
    let closure_0 = this.tags[arg0];
    const tags = this.tags;
    this.tags = tags.filter((item) => item !== closure_0);
    this.markChanged();
  }
}
const prototype = SearchQueryTagManager.prototype;

export default SearchQueryTagManager;
