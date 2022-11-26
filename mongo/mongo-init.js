db.createUser(
    {
        user: "rafa",
        pwd: "1234",
        roles: [
            {
                role: "readWrite",
                db: "bd_projects"
            }
        ]
    }
);