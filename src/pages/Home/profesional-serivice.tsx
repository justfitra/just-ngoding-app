import Card from "../../components/Card";
const ProfesionalService = () => {
  return (
    <ul className="mt-5 flex flex-col gap-8 overflow-scroll h-[300px]">
      <li>
        <Card
          type="with-image"
          title="Website Development"
          description="Pembuatan website modern yang responsif, cepat, dan sesuai kebutuhan bisnis. Fokus pada tampilan profesional dan pengalaman pengguna yang optimal."
          imageUrl="https://ardata.co.id/wp-content/uploads/2022/09/image21-e1662350573182.png"
        />
      </li>
    </ul>
  );
};

export default ProfesionalService;
