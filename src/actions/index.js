import * as basicAction from './innerAction'

export function ChangeContentCurrent(key){
  return {
      type:constants.CHANGESIDERCURRENT,
      data:key
  }
}
// export function SubmitData(type,data){
export const SubmitData = (type, data,source=null) => {
  return (dispatch, getState) => {
            switch (type) {
                case 'login':
                    return basicAction.sendLoginInfo(type,dispatch,data,[HideModal,UpdateUserInfo,UpdateLoginState]);
                case 'register':
                    return basicAction.sendRegisterInfo(type,dispatch,data,HideModal);
                case 'recordPost':
                    return basicAction.recordPost(type,dispatch,data,source,ChangeSiderCurrent);
                case 'submitComment':
                    return basicAction.submitComment(type,dispatch,null,data,source);
                default:
                    return
            }
        }
}

export function GetList(data,type){
  var callback;
  if (type === 'initializePoster'){
    callback=[changePageTotal,updatePosterinfo];
  }
  else if(type === 'pageSizeChange'){
    callback=[changePageSize,updatePosterinfo];
  }
  else if(type === 'pageNoChange'){
    callback=[changePageNo,updatePosterinfo];
  }
  return (dispatch, getState) => {
    return basicAction.getList('getList',dispatch,callback,data,type);
  }
}

export function changePageNo(data){
  return {
    type:constants.CHANGEPAGENO,
    data:data
  }
}

export function changePageSize(data){
  return {
    type:constants.CHANGEPAGESIZE,
    data:data
  }
}

export function changePageTotal(data){
  return {
    type:constants.CHANGEPAGETOTAL,
    data:data
  }
}

export function updatePosterinfo(data){
  return {
    type:constants.UPDATEPOSTERINFO,
    data:data
  }
}

export function updateDetailInfo(data){
  return {
    type:constants.UPDATEDETAILINFO,
    data:data
  }
}

export function getComment(data){
  var path = '/'+encodeURI(data.title)+'/'+encodeURI(data.date)
  return (dispatch, getState) => {
    return basicAction.getComment(path,dispatch,[updateDetailInfo],data);
  }
}

export function countCategoryData(){
  return(dispatch,getState)=>{
    return basicAction.countCategoryData('countCategoryData',dispatch,[updateCategoryData,getPostNoByDate]);
  }
}

export function updateCategoryData(data){
  return {
    type:constants.UPDATECATEGORYDATA,
    data:data
  }
}

export function getPostNoByDate(interval=7){
  return(dispatch,getState)=>{
    return basicAction.getPostNoByDate('getPostNoByDate',dispatch,[updatePostNoData],interval);
  }
}

export function updatePostNoData(data){
  return {
    type:constants.UPDATEPOSTNODATA,
    data:data
  }
}
