const presence = new Presence({
		clientId: "670325644319522816"
	}),
	browsingTimestamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", () => {
	const presenceData: PresenceData = {
		largeImageKey: "azurlogo",
		startTimestamp: browsingTimestamp
	};

	if (document.location.pathname === "/Azur_Lane_Wiki")
		presenceData.details = "Viewing Wiki home page";
	else if (document.querySelector(".firstHeading")) {
		presenceData.details = "Viewing page:";
		presenceData.state = document.querySelector(".firstHeading").textContent;
	}

	if (presenceData.details) presence.setActivity(presenceData);
	else presence.setActivity();
});
