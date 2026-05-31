const searchInput = document.getElementById("searchInput");
const weekFilter = document.getElementById("weekFilter");
const dateFilter = document.getElementById("dateFilter");

function filterResources() {

    const searchText =
        searchInput.value.toLowerCase();

    const week =
        weekFilter.value;

    const date =
        dateFilter.value;

    const resources =
        document.querySelectorAll(".resource");

    resources.forEach(resource => {

        const topic =
            resource.dataset.topic.toLowerCase();

        const resourceWeek =
            resource.dataset.week;

        const resourceDate =
            resource.dataset.date;

        const searchMatch =
            topic.includes(searchText);

        const weekMatch =
            week === "" ||
            resourceWeek === week;

        const dateMatch =
            date === "" ||
            resourceDate === date;

        if(searchMatch && weekMatch && dateMatch){
            resource.style.display = "block";
        }
        else{
            resource.style.display = "none";
        }
    });
}

searchInput.addEventListener(
    "keyup",
    filterResources
);

weekFilter.addEventListener(
    "change",
    filterResources
);

dateFilter.addEventListener(
    "change",
    filterResources
);