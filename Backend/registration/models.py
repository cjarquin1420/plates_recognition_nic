from django.db import models

class Vehicle(models.Model):
    plateID = models.CharField(max_length=20)
    ownerName = models.CharField(max_length=100)
    vehicleModel = models.CharField(max_length=50)

    def __str__(self):
        return self.plateID
