export const fr = {
  translation: {
    onboarding: {
      description: "Commencez à créer",
      get_started: "Commencer",
    },
    signIn: {
      title: "Bon retour ! 🎉",
      description: "Connectez-vous pour continuer",
      signUp: "Créer un compte",
      forgotPassword: "Mot de passe oublié ?",
      signIn: "Se connecter",
      or: "Ou continuez avec",
      emailPlaceholder: "Entrez votre email",
      passwordPlaceholder: "Entrez votre mot de passe",
    },
    signUp: {
      title: "Bienvenue sur BlueBird",
      description: "Inscrivez-vous pour continuer",
      signUp: "S'inscrire",
      or: "Ou continuez avec",
      displayNamePlaceholder: "Entrez votre nom complet",
      emailPlaceholder: "Entrez votre email",
      passwordPlaceholder: "Entrez votre mot de passe",
      confirmPasswordPlaceholder: "Confirmez votre mot de passe",
    },
    forgotPassword: {
      title: "Mot de passe oublié ?",
      description: "Entrez votre email pour réinitialiser votre mot de passe",
      emailPlaceholder: "Entrez votre email enregistré",
      submit: "Envoyer la demande",
    },
    resetPassword: {
      title: "Réinitialiser le mot de passe",
      description:
        "Un code de réinitialisation a été envoyé à votre email {{email}}. Veuillez saisir le code et créer un nouveau mot de passe.",
      resetCodePlaceholder: "Entrez le code de réinitialisation",
      newPasswordPlaceholder: "Entrez votre nouveau mot de passe",
      confirmPasswordPlaceholder: "Confirmez votre nouveau mot de passe",
      resetPassword: "Réinitialiser le mot de passe",
      resendCode: "Renvoyer le code",
      resendCodeIn: "Renvoyer le code dans {{displayTime}}",
    },
    SettingsPage: {
      account: "Compte",
      profile: "Profil",
      privacy: "Confidentialité",
      privacySettings: "Paramètres de confidentialité",
      notifications: "Notifications",
      pushNotifications: "Notifications Push",
      dataAndStorage: "Données et stockage",
      dataUsage: "Utilisation des données",
      general: "Général",
      theme: "Thème",
      language: "Langue",
      about: "À propos",
      support: "Support",
      helpCenter: "Centre d'aide",
      reportProblem: "Signaler un problème",
      other: "Autres",
      logOut: "Déconnexion",
      alertLogoutTitle: "Déconnexion",
      alertLogoutDescription: "Êtes-vous sûr de vouloir vous déconnecter ?",
      alertLogoutYes: "Oui",
      alertLogoutNo: "Non",
    },
    privacySettingsPage: {
      headerTitle: "Paramètres de confidentialité",
      accountPrivacy: "Confidentialité du compte",
      privateAccount: "Compte privé",
      activityStatus: "Statut d'activité",
      messagePrivacy: "Confidentialité des messages",
      readReceipts: "Accusés de lecture",
      messageFiltering: "Filtrage des messages",
      blockingAndRestriction: "Blocage et restrictions",
      blockedAccounts: "Comptes bloqués",
      restrictedAccounts: "Comptes restreints",
    },
    validation: {
      email: "Email",
      invalidEmail: "Adresse email invalide",
      password: "Mot de passe",
      passwordMatch: "Les mots de passe doivent correspondre",
      passwordRequirement:
        "Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre",
      required: "est requis",
      reset: "Code de réinitialisation",
    },
    languageSettings: {
      headerTitle: "Paramètres de langue",
      title: "Choisissez votre langue préférée",
    },
    messageFilteringScreen: {
      filterUnknownLabel: "Filtrer les messages des expéditeurs inconnus",
      filterExplicitLabel: "Filtrer les messages au langage explicite",
      blockedKeywordsLabel: "Mots-clés bloqués (séparés par des virgules)",
      blockedKeywordsPlaceholder:
        "Entrez des mots-clés séparés par des virgules",
      saveSettings: "Enregistrer les paramètres",
    },
    notificationsScreen: {
      headerTitle: "Notifications",
      generalNotifications: "Notifications générales",
      pushNotifications: "Notifications Push",
      emailNotifications: "Notifications par email",
      smsNotifications: "Notifications SMS",
      socialActivity: "Activité sociale",
      likes: "J'aime",
      comments: "Commentaires",
      mentions: "Mentions",
      friendRequests: "Demandes d'amis",
      directMessages: "Messages directs",
      groupNotifications: "Notifications de groupe",
      soundAndVibration: "Son et vibration",
      notificationSound: "Son de notification",
      vibrateOnNotification: "Vibrer à la notification",
    },
    themeSettings: {
      headerTitle: "Paramètres du thème",
      chooseTheme: "Choisissez votre thème préféré",
      light: "Clair",
      dark: "Sombre",
      system: "Système",
    },
    aboutScreen: {
      headerTitle: "À propos",
      appDescription: "Rencontrez des gens",
      appInformation: "Informations sur l'application",
      versionLabel: "Version :",
      buildNumberLabel: "Numéro de build :",
      updates: "Mises à jour",
      checkForUpdates: "Vérifier les mises à jour",
      noUpdatesTitle: "Pas de mises à jour",
      noUpdatesMessage: "Vous utilisez la dernière version.",
      errorTitle: "Erreur",
      updateErrorMessage:
        "Une erreur est survenue lors de la vérification des mises à jour.",
      rateThisApp: "Notez cette application",
      rateNow: "Noter maintenant",
      legal: "Légal",
      legalText: "© {{year}} {{appName}}. Tous droits réservés.",
      privacyPolicy: "Politique de confidentialité",
      termsAndConditions: "Conditions d'utilisation",
      openPrivacyError: "Impossible d'ouvrir la politique de confidentialité.",
      openTermsError: "Impossible d'ouvrir les conditions d'utilisation.",
    },
    helpScreen: {
      headerTitle: "Aide & Retours",
      subTitle:
        "Merci de nous faire part de vos retours ou de tout problème rencontré.",
      reportType: {
        bugReport: "Rapport de bug",
        feedback: "Retours",
        other: "Autre",
      },
      errorTitle: "Erreur",
      enterName: "Veuillez saisir votre nom.",
      enterEmail: "Veuillez saisir votre email.",
      validEmail: "Veuillez saisir une adresse email valide.",
      enterReportDescription:
        "Veuillez saisir une description de votre rapport.",
      reportFeedback: "Type de rapport : {{type}}\n\n{{report}}",
      reportSubmittedTitle: "Rapport soumis",
      reportSubmittedMessage:
        "Nom : {{name}}\nEmail : {{email}}\nType : {{type}}",
      placeholderName: "Votre nom",
      placeholderEmail: "Votre email",
      placeholderDescription: "Décrivez ici votre problème ou vos retours...",
      submitReport: "Soumettre le rapport",
    },
    tabLayout: {
      home: "Accueil",
      explore: "Explorer",
      chats: "Discussions",
      settings: "Paramètres",
    },
  },
};
