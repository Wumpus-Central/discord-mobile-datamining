// === Module 11523: isComplete ===

// Module 11523 (isComplete)
import obj132 from "obj132" /* 2 */;
import SearchEntrypointAnalyticsLocations from "SearchEntrypointAnalyticsLocations" /* 8506 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 8507 */;

function isComplete(type) {
  return type.type === SearchQueryTagTypes.COMPLETE;
}
let SearchQueryTagTypes = MessageEmbedTypes.SearchQueryTagTypes;
const SearchFilterAddLocations = SearchEntrypointAnalyticsLocations.SearchFilterAddLocations;
const result = obj132.fileFinishedImporting("modules/search/native/stores/SearchQueryTagManager.tsx");
class SearchQueryTagManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = [];
    set = new Set();
    obj[1] = set;
    set1 = new Set();
    obj[2] = set1;
    return obj;
  }
}
const prototype = SearchQueryTagManager.prototype;
prototype["markChanged"] = function markChanged() {
  const set = new Set();
  const set1 = new Set();
  const tags = this.tags;
  const item = tags.forEach((item, index) => {
    set.add(item.text);
    let tmp2 = item.type === set.COMPLETE;
    if (tmp2) {
      tmp2 = null != item.channelId;
    }
    if (tmp2) {
      set1.add(item.channelId);
    }
  });
  this.ids = set;
  this.channelIds = set1;
  this.version = this.version + 1;
};
prototype["mergeTag"] = function mergeTag(location, channelId) {
  SearchQueryTagTypes = location;
  closure_1 = channelId;
  const tags = this.tags;
  const items = [];
  items[HermesBuiltin.arraySpread(tags.filter((item, index) => {
    let tmp = item !== closure_0;
    if (tmp) {
      tmp = item !== closure_1;
    }
    return tmp;
  }), 0)] = { type: SearchQueryTagTypes.COMPLETE, text: "" + location.text + " " + channelId.text, location: location.location, searchTokenType: location.searchTokenType, channelId: channelId.channelId, userId: channelId.userId };
  this.tags = items;
};
prototype["replaceTag"] = function replaceTag(arg0, type) {
  closure_0 = arg0;
  closure_1 = type;
  const tags = this.tags;
  this.tags = tags.map((item, index) => {
    let tmp = item;
    if (item === closure_0) {
      tmp = closure_1;
    }
    return tmp;
  });
};
prototype["exists"] = function exists(text) {
  const ids = this.ids;
  return ids.has(text.text);
};
prototype["getChannelIds"] = function getChannelIds() {
  return this.channelIds;
};
prototype["getUserIds"] = function getUserIds(arg0) {
  closure_0 = arg0;
  const set = new Set();
  const tags = this.tags;
  const item = tags.forEach((item, index) => {
    if (item.type === constants.COMPLETE) {
      const userId = item.userId;
      let tmp2 = item.searchTokenType === constants;
      if (tmp2) {
        tmp2 = null != userId;
      }
      if (tmp2) {
        set.add(userId);
      }
    }
  });
  return set;
};
prototype["isChannelTagsOnly"] = function isChannelTagsOnly() {
  const tags = this.tags;
  const found = tags.filter(isComplete);
  return found.every((item, index) => null != item.channelId);
};
prototype["hasUserAddedTags"] = function hasUserAddedTags() {
  const tags = this.tags;
  const found = tags.filter(isComplete);
  return found.some((item, index) => item.location !== constants.CLIENT_AUTO_ADD);
};
prototype["isEmpty"] = function isEmpty() {
  return 0 === this.tags.length;
};
prototype["getPrefixTag"] = function getPrefixTag() {
  if (null != this.tags[this.tags.length - 1]) {
    let tmp3;
    if (tmp.type === SearchQueryTagTypes.PREFIX) {
      tmp3 = tmp;
    }
    return tmp3;
  }
};
prototype["get"] = function get() {
  return this.tags;
};
prototype["set"] = function set(tags) {
  this.tags = tags;
  this.markChanged();
};
prototype["getQueryString"] = function getQueryString() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const tags = this.tags;
  const found = tags.filter((item, index) => {
    let tmp2 = !tmp;
    if (item.type === flag.PREFIX) {
      tmp2 = flag;
    }
    return tmp2;
  });
  let str = "";
  if (0 !== found.length) {
    const mapped = found.map((item, index) => item.text);
    const _HermesInternal = HermesInternal;
    str = "" + mapped.join(" ");
  }
  return str;
};
prototype["add"] = function add(type) {
  const self = this;
  if (!this.exists(type)) {
    if (type.type === SearchQueryTagTypes.PREFIX) {
      if (null != tmp) {
        if (tmp.type === SearchQueryTagTypes.PREFIX) {
          self.replaceTag(tmp, type);
        }
        self.markChanged();
        self.mergeTag(tmp, type);
      }
    }
    if (tmp5) {
      const items = [];
      items[HermesBuiltin.arraySpread(self.tags, 0)] = type;
      self.tags = items;
    }
    tmp5 = type.type === SearchQueryTagTypes.PREFIX || type.type === SearchQueryTagTypes.COMPLETE;
  }
};
prototype["removeAnyPrefixTags"] = function removeAnyPrefixTags() {
  const tags = this.tags;
  this.tags = tags.filter((item, index) => item.type !== constants.PREFIX);
  this.markChanged();
};
prototype["removeAtIndex"] = function removeAtIndex(closure_0) {
  closure_0 = this.tags[closure_0];
  const tags = this.tags;
  this.tags = tags.filter((item, index) => item !== closure_0);
  this.markChanged();
};

export default SearchQueryTagManager;