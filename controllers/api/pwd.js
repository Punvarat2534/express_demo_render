﻿class PasswordGeneratorService {
 
  constructor() {
    //this.PasswordGeneratorService = new PasswordGeneratorService();
  }
  
   generate() {
      const length = 8;
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let password = "";
      for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
      }
      return password;
   }
}

module.exports = PasswordGeneratorService;