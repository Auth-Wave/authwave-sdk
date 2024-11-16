import { AuthService } from "../auth/auth.service";

export class AuthServiceTest {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public testCreateAccount = async (data: any) => {
    try {
      const response = await this.authService.createAccount(
        data.username,
        data.email,
        data.password
      );
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  };

  public testDeleteAccount = async () => {
    try {
      const response = await this.authService.deleteAccount();
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  };

  public testPasswordLogin = async (data: any) => {
    try {
      const response = await this.authService.passwordLogin(
        data.username,
        data.email,
        data.password
      );
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  };

  public testGetCurrentUser = async () => {
    try {
      const response = await this.authService.getCurrentUser();
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  };

  public testLogout = async () => {
    try {
      const response = await this.authService.logout();
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  };

  public testGetAllSessions = async () => {
    try {
      const response = await this.authService.getAllSessions();
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  };

  public testDeleteSessionById = async (sessionId: string) => {
    try {
      const response = await this.authService.deleteSessionById(sessionId);
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  };

  public testDeleteAllSessions = async () => {
    try {
      const response = await this.authService.deleteAllSessions();
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  };

  public testAccountVerification = {
    init: async () => {
      try {
        const response = await this.authService.accountVerification.init();
        return response;
      } catch (error: any) {
        return error.response.data;
      }
    },
    complete: async (token: string) => {
      try {
        const response = await this.authService.accountVerification.complete(
          token
        );
        return response;
      } catch (error: any) {
        return error.response.data;
      }
    },
  };

  public testResetPassword = {
    init: async () => {
      try {
        const response = await this.authService.resetPassword.init();
        return response;
      } catch (error: any) {
        return error.response.data;
      }
    },
    complete: async (token: string, newPassword: string) => {
      try {
        const response = await this.authService.resetPassword.complete(
          token,
          newPassword
        );
        return response;
      } catch (error: any) {
        return error.response.data;
      }
    },
  };

  public testRefreshAccessToken = async () => {
    try {
      const response = await this.authService.refreshAccessToken();
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  };

  public testOtpLogin = {
    init: async (email: string) => {
      try {
        const response = await this.authService.otpLogin.init(email);
        return response;
      } catch (error: any) {
        return error.response.data;
      }
    },
    complete: async (email: string, token: string) => {
      try {
        const response = await this.authService.otpLogin.complete(email, token);
        return response;
      } catch (error: any) {
        return error.response.data;
      }
    },
  };

  public testMagicURLLogin = {
    init: async (email: string) => {
      try {
        const response = await this.authService.magicURLLogin.init(email);
        return response;
      } catch (error: any) {
        return error.response.data;
      }
    },
    complete: async (email: string, token: string) => {
      try {
        const response = await this.authService.magicURLLogin.complete(
          email,
          token
        );
        return response;
      } catch (error: any) {
        return error.response.data;
      }
    },
  };

  public testGetAllUserLogs = async ({
    page,
    itemLimit,
    startDate,
    endDate,
  }: {
    page?: number;
    itemLimit?: number;
    startDate?: Date;
    endDate?: Date;
  }) => {
    try {
      const response = await this.authService.getAllUserLogs({
        page,
        itemLimit,
        startDate,
        endDate,
      });
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  };

  public testGetUserLogsByEventCode = async ({
    page,
    itemLimit,
    startDate,
    endDate,
    eventCode,
  }: {
    page?: number;
    itemLimit?: number;
    startDate?: Date;
    endDate?: Date;
    eventCode: string;
  }) => {
    try {
      const response = await this.authService.getUserLogsByEventCode({
        page,
        itemLimit,
        startDate,
        endDate,
        eventCode,
      });
      return response;
    } catch (error: any) {
      return error.response.data;
    }
  };
}
