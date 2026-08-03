
export default function mapCacheDelete(arg0) {
  const deleteResult = require(757) /* getMapData */(this, arg0).delete(arg0);
  let num = 0;
  if (deleteResult) {
    num = 1;
  }
  this.size = this.size - num;
  return deleteResult;
};