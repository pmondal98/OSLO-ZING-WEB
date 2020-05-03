(function() {

    const webTeam = infojson.filter((val) => val.team === 'WEB');
    const mediaTeam = infojson.filter((val) => val.team === 'MEDIA');
    const contentTeam = infojson.filter((val) => val.team === 'CONTENT');
    const others = infojson.filter((val) => !val.team);

    const generateTeamSection = (teamName, teamArray) => {
        const htmlCode = `
        <div class="container">
        <h5 class="section-title h1">${teamName}</h5>
            <div class="row">
                ${generateTeamMemberHelper(teamArray)}
            </div>        
        </div>
        `;
        return htmlCode;
    }

    const generateTeamMemberHelper = (teamArray) => {
        let htmlCode = ``;
        teamArray.forEach((teamMember) => {
            htmlCode = htmlCode + '\n' + generateTeamMember(teamMember);
        });
        return htmlCode;
    }

    const generateTeamMember = (teamMember) => {

        if (!teamMember.crazy_things) {
            teamMember.crazy_things = "Discover Me!"
        }

        if (!teamMember.skills) {
            teamMember.skills = "Looks like I am interesting!"
        }


        addMemberModal(teamMember);

        const htmlCode = `
        <!-- Team member -->
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <div class="image-flip h-75" >
                <div class="mainflip flip-0 h-100">
                    <div class="frontside h-100">
                        <div class="card h-100">
                            <div class="card-body text-center">
                                <p><img class=" img-fluid" src="${teamMember.img_link}" alt="card image"></p>
                                <h4 class="card-title">${teamMember.name}</h4>
                                <p class="card-text">${teamMember.crazy_things}</p>
                                <!--
                                <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                -->
                            </div>
                        </div>
                    </div>
                    <div class="backside">
                        <div class="card">
                            <div class="card-body text-center mt-4">
                                <h4 class="card-title">${teamMember.name}</h4>
                                <p class="card-text">${teamMember.skills}</p>
        
                                <button data-toggle="modal" data-target="#${teamMember.email}" class="btn btn-info-outline"><b>Q & A</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- ./Team member -->
        `;

        return htmlCode;
    }


    const addMemberModal = (teamMember) => {
        const moreInfoHTML = (teamMember.more_info) ? `<div>
            <b>Q. Got something more to share with us?</b>
            <br>
            <br>
            <p>${teamMember.more_info}</p>
        </div>
        <br>
        <br>` : "";
        const htmlCode = `
                <div class="modal fade" id="${teamMember.email}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">${teamMember.name}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div>
                                <b>Q. What do you like to do? Sleeping? Netflix? What are your quirkiest interests?</b>
                                <br>
                                <br>
                                <p>${teamMember.interests}</p>
                            </div>
                            <br>
                            <div>
                                <b>Q. What is the first thing you would like to do after this eff-ing lockdown?</b>
                                <br>
                                <br>
                                <p>${teamMember.post_lockdown_plan}</p>
                            </div>
                            <br>
                            ${moreInfoHTML}

                            <div>
                                <b>Q. One thing about your moderator ;)</b>
                                <br>
                                <br>
                                <p>${teamMember.about_mod}</p>
                            </div>
                            <br>
                            

                            <div>
                                <b>Q. What do you think about Oslo? (We didn't perish in a season, like Money Heist. Maybe we are destined for greatness?)</b>
                                <br>
                                <br>
                                <p>${teamMember.oslo_bio}</p>
                            </div>
                            <br>
                            

                            <div>
                                <b>Q. Your experience at HighWay to HighRadius so far? (Changes you noticed in yourself after joining?)</b>
                                <br>
                                <br>
                                <p>${teamMember.highradius_exp}</p>
                            </div>
                            <br>
                            
                        </div>
                    </div>
                    <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                    </div> -->
                </div>
                </div>
            </div>    
        `;

        const node = document.createElement("DIV");
        node.innerHTML = htmlCode;
        document.querySelector('body').appendChild(node);

    }

    const populate = () => {

        const webTeamHTML = generateTeamSection("WEB TEAM", webTeam);
        const mediaTeamHTML = generateTeamSection("MEDIA TEAM", mediaTeam);
        const contentTeamHTML = generateTeamSection("CONTENT TEAM", contentTeam);
        const othersTeamHTML = generateTeamSection("OUR MOTIVATORS", others);
        
        const teams = document.createElement("DIV");
        teams.innerHTML = `${webTeamHTML}<br>${mediaTeamHTML}<br>${contentTeamHTML}<br>${othersTeamHTML}`;


        const sectionNode = document.querySelector("#team");
        sectionNode.appendChild(teams);
    }

    populate();
    
})();


