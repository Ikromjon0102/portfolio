document.addEventListener("DOMContentLoaded", function () {
    const nameSearch = document.getElementById('name-search');
    const tags = document.querySelectorAll(".tag");
    const projects = document.querySelectorAll(".project");
    const noResults = document.getElementById('no-results');

    function filterProjects() {
        const nameQuery = nameSearch.value.toLowerCase();
        let visibleProjects = 0;

        projects.forEach((project) => {
            const name = project.getAttribute('data-name');
            const nameMatch = name.includes(nameQuery);

            if (nameMatch) {
                project.style.display = "";
                visibleProjects++;
            } else {
                project.style.display = "none";
            }
        });

        // Show "No results" message if no projects are visible
        if (visibleProjects === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
    }

    tags.forEach((tag) => {
        tag.addEventListener("click", function () {
            const selectedTag = this.getAttribute("data-tag");
            let visibleProjects = 0;

            // Toggle active state on tags
            tags.forEach(tag => {
                if (tag === this && !tag.classList.contains('bg-blue-700')) {
                    // Activate this tag
                    tag.classList.remove('bg-blue-700');
                    tag.classList.add('bg-blue-900');
                } else if (tag !== this) {
                    // Deactivate other tags
                    tag.classList.add('bg-blue-700');
                    tag.classList.remove('bg-blue-900');
                }
            });

            projects.forEach((project) => {
                const projectTags = project.getAttribute("data-tags");

                if (projectTags.includes(selectedTag)) {
                    project.style.display = "";
                    visibleProjects++;
                } else {
                    project.style.display = "none";
                }
            });

            // Show "No results" message if no projects are visible
            if (visibleProjects === 0) {
                noResults.classList.remove('hidden');
            } else {
                noResults.classList.add('hidden');
            }
        });
    });

    nameSearch.addEventListener("keyup", filterProjects);
});