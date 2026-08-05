// _runtime/00756_mapCacheDelete.js

export default function mapCacheDelete(arg0) {
  const deleteResult = require("00757_getMapData.js") /* getMapData */(this, arg0).delete(arg0);
  let num = 0;
  if (deleteResult) {
    num = 1;
  }
  this.size = this.size - num;
  return deleteResult;
};