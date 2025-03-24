from django.contrib import admin
from .models import Project, ProjectImage, Tag



class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'link',)
    inlines = [ProjectImageInline]
    search_fields = ('title', 'description')
    list_filter = ('tags',)


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ("name",)


admin.site.register(ProjectImage)