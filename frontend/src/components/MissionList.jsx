import MissionCard from "./MissionCard";

function MissionList({ missions, onDelete, onEdit }) {
  if (!missions || missions.length === 0) {
    return <p style={{ textAlign: "center" }}>No hay misiones</p>;
  }

  return (
    <div>
      {missions.map((mission) => (
        <MissionCard
          key={mission.id}
          mission={mission}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default MissionList;