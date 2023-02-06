type Props = {
  repos: string[];
};

export default function ReposWidget({ repos }: Props) {
  return (
    <>
      {repos &&
        repos.map((repo: string, i: number) => (
          <div className="di__item" key={i}>
            {i === 0 && <div className="di__label">Repo(s)</div>}
            {i > 0 && <div className="di__label">&nbsp;</div>}
            <div className="di__value">
              <a href={repo} target="_blank" rel="noreferrer">
                {repo}
              </a>
            </div>
          </div>
        ))}
    </>
  );
}
