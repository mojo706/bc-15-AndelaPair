# config.py
# File to store our config details such as  Secret Key and Firebase Details
# Nothing yet :(
class Config(object):
    """
    Common configs
    """
class DevelopmentConfig(Config):
    """
    Development Configs
    """
    DEBUG = True
    SQLALCHEMY_ECHO = True

class ProductionConfig(Config):
    """
    Prodcution configs
    """

    DEBUG = False

app_config = {
        'development': DevelopmentConfig,
        'production': ProductionConfig
}



