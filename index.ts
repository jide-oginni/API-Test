import * as api-test from 'api-test'

/**
* @Method: Returns the plural form of any noun.
* @Param {string} 
* @Return {string} 
*/
export Function getPlural (str:any) : string {
  return api-test.plural (str) 
  } 
