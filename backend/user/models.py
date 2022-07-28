from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):

    def create_user(self):
        # TODO: Creation logic
        return


class User(AbstractBaseUser):
    email = models.EmailField(verbose_name='email', unique=True, null=False, blank=False, max_length=255)
    first_name = models.CharField(verbose_name='First name', null=False, blank=False, max_length=255)
    last_name = models.CharField(verbose_name='Last name', null=False, blank=False, max_length=255)
    